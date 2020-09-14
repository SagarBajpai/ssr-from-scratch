##Booting up the Client and taking charge from the server:

So what actually happening here is, first our server loads the `Home` component from the server side inside `root` id (Check `src/index.js`).
After first rendering on broswer, our `bundle.js` starts to Boot up. Now this Client Side Bundle has to take the charge from the server, so that we can do our client side routing using `react-router` and enjoy the react's single page application feature.

After all, one of the main reason to do SSR is to have faster initial load times, which we have achieved by rendering the `Home` component from server.

React bundle will take the charge from the server, hydrate all the Javascript event handlers. Check `src/client/client.js`.
