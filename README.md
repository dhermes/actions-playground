# Captured Inputs from GitHub Actions Workflow Runs

> Playground for Debugging GitHub Actions

These examples contain all environment variables beginning with `GITHUB_` as
well as the output of `${{ toJSON(github) }}`. This should give a deeper
understanding of which inputs are available to workflow and action authors.

## Example Outputs

See the directories here for the captured outputs, e.g.
`_examples/create/1415260203/`.

For links (which may have expired) to the original runs, see the
[Trigger Many][1] workflow.

-   `create`
    -   `ref_type:tag`: [Run 1415260203][3] (original [run][2])
    -   `ref_type:branch`: [Run 1467925823][15] (original [run][14])
-   `issue_comment`
    -   `action:created`: [Run 1467993054][17] (original [run][16])
-   `label`
    -   `action:created`: [Run 1468039335][19] (original [run][18])
    -   `action:deleted`: [Run 1468096449][21] (original [run][20])
-   `pull_request`
    -   `action:opened`: [Run 1415282007][9] (original [run][8])
    -   `action:synchronize`: [Run 1468066098][23] (original [run][22])
    -   `action:labeled`: [Run 1468101292][25] (original [run][24])
-   `pull_request_review`
    -   `action:submitted`: [Run 1467993605][27] (original [run][26])
-   `pull_request_review_comment`
    -   `action:created`: [Run 1468029499][29] (original [run][28])
-   `pull_request_target`
    -   `action:opened`: [Run 1468095906][31] (original [run][30])
    -   `action:labeled`: [Run 1468101302][33] (original [run][32])
-   `push`: [Run 1415256715][5] (original [run][4])
-   `schedule`: [Run 1464380337][11] (original [run][10])
-   `workflow_dispatch`: [Run 1415276408][7] (original [run][6])
-   `workflow_run`: [Run 1464429734][13] (original [run][12])

[1]: https://github.com/dhermes/actions-playground/actions/workflows/trigger-many.yml
[2]: https://github.com/dhermes/actions-playground/actions/runs/1415260203
[3]: _examples/create/1415260203
[4]: https://github.com/dhermes/actions-playground/actions/runs/1415256715
[5]: _examples/push/1415256715
[6]: https://github.com/dhermes/actions-playground/actions/runs/1415276408
[7]: _examples/workflow_dispatch/1415276408
[8]: https://github.com/dhermes/actions-playground/actions/runs/1415282007
[9]: _examples/pull_request/1415282007
[10]: https://github.com/dhermes/actions-playground/actions/runs/1464380337
[11]: _examples/schedule/1464380337
[12]: https://github.com/dhermes/actions-playground/actions/runs/1464429734
[13]: _examples/workflow_run/1464429734
[14]: https://github.com/dhermes/actions-playground/actions/runs/1467925823
[15]: _examples/create/1467925823
[16]: https://github.com/dhermes/actions-playground/actions/runs/1467993054
[17]: _examples/issue_comment/1467993054
[18]: https://github.com/dhermes/actions-playground/actions/runs/1468039335
[19]: _examples/label/1468039335
[20]: https://github.com/dhermes/actions-playground/actions/runs/1468096449
[21]: _examples/label/1468096449
[22]: https://github.com/dhermes/actions-playground/actions/runs/1468066098
[23]: _examples/pull_request/1468066098
[24]: https://github.com/dhermes/actions-playground/actions/runs/1468101292
[25]: _examples/pull_request/1468101292
[26]: https://github.com/dhermes/actions-playground/actions/runs/1467993605
[27]: _examples/pull_request_review/1467993605
[28]: https://github.com/dhermes/actions-playground/actions/runs/1468029499
[29]: _examples/pull_request_review_comment/1468029499
[30]: https://github.com/dhermes/actions-playground/actions/runs/1468095906
[31]: _examples/pull_request_target/1468095906
[32]: https://github.com/dhermes/actions-playground/actions/runs/1468101302
[33]: _examples/pull_request_target/1468101302
