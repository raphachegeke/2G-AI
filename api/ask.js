const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { question } = req.body;

  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt: question,
      max_tokens: 60,
      temperature: 0.7,
    });

    const answer = response.body.generations[0].text.trim();
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ answer: 'Error generating response.' });
  }
}
