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

-   `create`: [Run 1415260203][3] (original [run][2])
-   `pull_request`: [Run 1415282007][9] (original [run][8])
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
