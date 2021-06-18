const http = require("http")
const server = http.createServer(doSometingonIncoming);
server.listen(1000, function() {
	console.log("Server is running on port 3000...")
})

function doSometingonIncoming(data, setOfFunctions) {
	// do some stuff...
	setOfFunctions.end("Welcome to Node.js")
}