## Single command to run server webpack, client webpack and nodemon

Right now, we have to run 3 commands independently on 3 terminals, `dev:server` , `dev:build:server` and `dev:build:client`.
We'll use the package `npm-run-all` that'll run the commands in parallel in 1 terminal.
