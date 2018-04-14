var http = require("http");

var PORT = 7050;

function handleRequest(request, response) {
    response.end("You suck!" + request.url);
}

var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {

// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});