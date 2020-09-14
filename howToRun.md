## Splitting the Webpack into Base Config

Right now, if you see `webpack.base.js` and `webpack.client.js` has some common code. In future we will have more common code, so we need to create some base config which is going to be common between both.

We'll use `webpack-merge` package to do do.
