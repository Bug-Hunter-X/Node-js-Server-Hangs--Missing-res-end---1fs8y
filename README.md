# Node.js Server Hang: Missing res.end()

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in the request handler.  This can lead to the server hanging and failing to respond to clients, resulting in timeouts.

The `server.js` file contains the buggy code. The `serverSolution.js` file provides a corrected version.

## Bug

The server in `server.js` receives requests but never sends a response because it's missing the crucial `res.end()` call. This causes the server to hang on to the connection indefinitely.  Long-running requests exacerbate this problem.

## Solution

The solution in `serverSolution.js` demonstrates the importance of calling `res.end()` to properly signal the end of the response. This ensures that the server releases the connection and can handle subsequent requests efficiently.