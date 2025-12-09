const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, who='you') {
  const div = document.createElement('div');
  div.style.marginBottom = '6px';
  if (who === 'you') {
    div.textContent = 'Anda: ' + text;
  } else {
    div.textContent = text;
  }
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

sendBtn.addEventListener('click', function() {
  const text = inputEl.value.trim();
  if (!text) return;
  addMessage(text, 'you');
  inputEl.value = '';
  // simulasi balasan sederhana
  setTimeout(() => {
    addMessage('Bot: Pesan diterima -> ' + text, 'bot');
  }, 400);
});

inputEl.addEventListener('keypress', function(e){
  if (e.key === 'Enter') sendBtn.click();
});