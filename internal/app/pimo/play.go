package pimo

import (
	"net/http"
	"strings"

	"github.com/cgi-fr/pimo/pkg/jsonline"
	"github.com/cgi-fr/pimo/pkg/model"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/rs/zerolog/log"
)

func Play() *echo.Echo {
	router := echo.New()

	router.Use(middleware.CORS())
	router.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "${time_rfc3339} : method=${method}, uri=${uri}, status=${status}, host=${host}, origin=${user_agent}\n" +
			" err=${error}\n",
	}))

	// router.GET("/*", echo.WrapHandler(handleClient()))
	router.POST("/play", play)

	return router
}

// play binds client interface data entry to be processed and returns the transformed json to client
func play(ctx echo.Context) error {
	config := Config{
		EmptyInput:       false,
		RepeatUntil:      "",
		RepeatWhile:      "",
		Iteration:        1,
		SkipLineOnError:  false,
		SkipFieldOnError: false,
		CachesToDump:     map[string]string{},
		CachesToLoad:     map[string]string{},
	}

	yaml := ctx.FormValue("masking")
	data := ctx.FormValue("data")

	pdef, err := model.LoadPipelineDefinitionFromYAML([]byte(yaml))
	if err != nil {
		log.Err(err).Msg("Cannot load pipeline definition")
		return err
	}

	input, err := jsonline.JSONToDictionary([]byte(data))
	if err != nil {
		log.Err(err).Msg("Cannot load pipeline definition")
		return err
	}

	config.SingleInput = &input
	context := NewContext(pdef)

	if err := context.Configure(config); err != nil {
		log.Err(err).Msg("Cannot configure pipeline")
		return err
	}

	result := &strings.Builder{}

	stats, err := context.Execute(result)
	if err != nil {
		log.Err(err).Msg("Cannot execute pipeline")
		return err
	}

	log.Info().Interface("stats", stats).Msg("Input masked")
	return ctx.JSONBlob(http.StatusOK, []byte(result.String()))
}
