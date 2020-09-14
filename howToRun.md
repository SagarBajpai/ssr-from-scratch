## Optimizing Server Build

Right now, server side build includes all the libraries, doesn't matter we are using it or not in the project. `webpack-node-externals` library will make sure to include only those library which we are actually using.

Before `webpack-node-externals` server build was around 750Kb.
After using it, it is only 4.26Kb.

That's huge tight ;)
