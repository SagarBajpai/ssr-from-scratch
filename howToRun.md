## Finally, API calling at the server

The UserList component has a `loadOption` function which contains a `dispatch` method. This loadOption method is passed in in the Route Object inside `Route.js`.
Inside server file, `matchRoutes` function is used to find which component is asked by the cilent to render. Then it will loop over the matched routes and try to find the method `route.loadOptions`. If it exists and then it will call the function which container the API call.

In this way we can achieve the API calls on the Backend.

Turn of your JavaScript in Browser and hit the `/users` route. You will see the data of usersList
coming from the server preset. :)
