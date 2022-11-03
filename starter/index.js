const webex = (window.webex = window.Webex.init({
    credentials: {
        access_token: "<YOUR-PERSONAL-ACCESS_TOKEN>"
    }
}));

// Text area for logging output
var output = document.getElementById("output");

webex.once(`ready`, function () {
    if (webex.canAuthorize) {
        log("Authorization successful.");
    }
});
// Log utility function
function log(data) {
    output.value += data += "\n";
}

