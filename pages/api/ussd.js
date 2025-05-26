export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Only POST allowed');

  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const text = params.get('text');

    let response = '';

    if (text === '') {
      response = `CON Welcome to AI Helper
1. Crop Advice
2. Weather Tips
3. Exit`;
    } else if (text === '1') {
      response = 'END Use neem oil and rotate crops.';
    } else if (text === '2') {
      response = 'END Light rains today. Perfect for planting.';
    } else {
      response = 'END Invalid choice.';
    }

    res.setHeader('Content-Type', 'text/plain');
    res.send(response);
  });
}
