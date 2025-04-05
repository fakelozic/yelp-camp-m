Bun.serve({
  port: 8080,
  fetch(req) {
    return new Response("Hello from bun server");
  },
});
console.log("server running");
