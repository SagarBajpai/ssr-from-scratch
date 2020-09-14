We have two problems now:
1: We have to re-run the webpack again to create a new bundle, whenever we do any change in our components.
2: We have to restarted the node server again to serve the updated build.

Run `npm run dev:build:webpack` in one terminal and `npm run dev:server` in another. With `--watch` flag in webpack command, now webpack will re-run again when there will be any change in the react component. Our first problem is solved. Other problem is that we have to restart the server again to serve the new bundle.
To do this, nodemon will `--watch` the build folder, if any change will happen to it, it will execute the command `node build/bundle.js`.
Execution is happening beacuse of `--exec` flag.
