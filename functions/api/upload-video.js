// Cloudflare Worker code (worker.js)
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'POST' && request.headers.get('Content-Type').startsWith('multipart/form-data')) {
    try {
      // 1. Get the request body as a FormData object
      const formData = await request.formData();

      // 2. Construct a new request to your Next.js API route
      const nextJsRequest = new Request('https://zero00-primal-mom.onrender.com/api/upload-video', { // Replace with your Next.js API route URL
        method: 'POST',
        body: formData, // Pass the FormData object directly
        headers: {
          // Don't set Content-Type here!  fetch will handle it correctly.
        },
      });

      // 3. Forward the request to Next.js using fetch
      const response = await fetch(nextJsRequest);

      // 4. Return the response from Next.js to the client
      return new Response(response.body, {
        status: response.status,
        headers: response.headers
      });

    } catch (error) {
      console.error('Error forwarding request:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  } else {
    // Handle other requests (e.g., OPTIONS)
    return new Response('Method Not Allowed', { status: 405 });
  }
}