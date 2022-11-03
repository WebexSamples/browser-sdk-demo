# Browser SDK Messaging Sample app

This sample shows how to use the Webex Browser SDK to do the following:

* List rooms (spaces) you belong to
* Create and delete rooms
* Send a message to a room
* Add members to a room
* Listen for newly created or deleted messages in a room

This app accompanies a [tutorial](https://developer.webex.com/docs/browser-sdk-messaging-tutorial) on the Webex Developer Portal that you can follow along with with [starter files](./starter), or run the [completed project](./completed).

![](app.png)

To use the completed app you need to obtain use your [personal access token](https://developer.webex.com/docs/getting-your-personal-access-token) from the Developer Portal that the SDK will use to make API calls.

> In a production environment you will want to create a [Webex Integration](https://developer.webex.com/docs/integrations) (OAuth client) that will obtain an API access token for the authenticating Webex user.

Add your personal access token to index.js:

```javascript
const webex = (window.webex = window.Webex.init({
    credentials: {
        access_token: "<YOUR-PERSONAL-ACCESS_TOKEN>"
    }
}));
```

Save your changes and load index.html in a browser and you should see a "Authentication successful" message.

![](authorized.png)