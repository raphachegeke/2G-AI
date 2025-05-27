document.getElementById('chat-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const userText = input.value;
  updateChat('You', userText);
  input.value = '';

  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: userText })
  });

  const data = await res.json();
  updateChat('Bot', data.answer);
});

function updateChat(sender, message) {
  const box = document.getElementById('chat-box');
  const msg = document.createElement('div');
  msg.textContent = `${sender}: ${message}`;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}
