import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { question } = req.body;

  try {
    const response = await cohere.chat({
      model: 'command',
      message: question,
    });

    const answer = response.text.trim();
    res.status(200).json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: 'Error generating response.' });
  }
}
