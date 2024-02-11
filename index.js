const http = require('http');

const server = http.createServer((req, res) => {
  // Set content type to HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // HTML content with Open Graph tags
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta property="og:image" content="https://cryptoplaza.es/wp-content/uploads/2022/05/cryptoplaza.png">
      
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://cryptoplaza.es/wp-content/uploads/2022/05/cryptoplaza.png">
      
      <meta property="fc:frame:button:1" content="Website">
      <meta property="fc:frame:button:1:action" content="link">
      <meta property="fc:frame:button:1:target" content="https://cryptoplaza.es/">
      
      <meta property="fc:frame:button:2" content="Airdrops">
      <meta property="fc:frame:button:2:action" content="link">
      <meta property="fc:frame:button:2:target" content="https://airdrops.cryptoplaza.es/">
    </head>
    <body>
      <h1>Hello, Open Graph!</h1>
      <p>This is a simple Node.js app that returns Open Graph metadata.</p>
    </body>
    </html>
  `;

  // Send the HTML content to the client
  res.end(htmlContent);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
