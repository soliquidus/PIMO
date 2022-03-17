window.BENCHMARK_DATA = {
  "lastUpdate": 1647499524818,
  "repoUrl": "https://github.com/CGI-FR/PIMO",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "CGI-FR",
            "username": "CGI-FR"
          },
          "committer": {
            "name": "CGI-FR",
            "username": "CGI-FR"
          },
          "id": "2542f9aeab44b1a3599aeaf073b254b6fcd8a4e5",
          "message": "chore(perf): add bench tests",
          "timestamp": "2022-02-07T17:15:00Z",
          "url": "https://github.com/CGI-FR/PIMO/pull/101/commits/2542f9aeab44b1a3599aeaf073b254b6fcd8a4e5"
        },
        "date": 1647383657178,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPimoRun",
            "value": 204609,
            "unit": "ns/op\t   16382 B/op\t     329 allocs/op",
            "extra": "55201 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "youen.peron@cgi.com",
            "name": "Youen Péron",
            "username": "youen"
          },
          "committer": {
            "email": "youen.peron@cgi.com",
            "name": "Youen Péron",
            "username": "youen"
          },
          "distinct": true,
          "id": "189063e904eb2fe9b60678e446bd6c63a0c4db45",
          "message": "chore(bench): fix push on main",
          "timestamp": "2022-03-16T20:39:27Z",
          "tree_id": "fe14f13b1b4f9b3e3dafb7cd2f66ac8da4c8c6c4",
          "url": "https://github.com/CGI-FR/PIMO/commit/189063e904eb2fe9b60678e446bd6c63a0c4db45"
        },
        "date": 1647463331233,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPimoRun",
            "value": 203084,
            "unit": "ns/op\t   16491 B/op\t     343 allocs/op",
            "extra": "54726 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "youen.peron@cgi.com",
            "name": "Youen Péron",
            "username": "youen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b19a21674026c71e56306cf212872786f7fcbf7",
          "message": "perf(pipe): remove useless dict copy (#104)",
          "timestamp": "2022-03-16T22:42:56+01:00",
          "tree_id": "6205484a3d55ce250e797b0faa3e1152b28414c8",
          "url": "https://github.com/CGI-FR/PIMO/commit/6b19a21674026c71e56306cf212872786f7fcbf7"
        },
        "date": 1647467129749,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPimoRun",
            "value": 199277,
            "unit": "ns/op\t    4050 B/op\t     120 allocs/op",
            "extra": "60043 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37d680306785aa316089ff5b9c5c99bd8a4f7412",
          "message": "chore(deps): bump github.com/labstack/echo/v4 from 4.7.1 to 4.7.2 (#106)\n\nBumps [github.com/labstack/echo/v4](https://github.com/labstack/echo) from 4.7.1 to 4.7.2.\r\n- [Release notes](https://github.com/labstack/echo/releases)\r\n- [Changelog](https://github.com/labstack/echo/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/labstack/echo/compare/v4.7.1...v4.7.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/labstack/echo/v4\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-03-17T07:42:40+01:00",
          "tree_id": "4f7ba023675b5e158904697b631203b41dabee62",
          "url": "https://github.com/CGI-FR/PIMO/commit/37d680306785aa316089ff5b9c5c99bd8a4f7412"
        },
        "date": 1647499524173,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkPimoRun",
            "value": 213660,
            "unit": "ns/op\t    4013 B/op\t     106 allocs/op",
            "extra": "53143 times\n2 procs"
          }
        ]
      }
    ]
  }
}