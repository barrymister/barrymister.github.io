---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
---

# Welcome to My Personal Website

Hello, I'm Barry Mister. This is my personal space on the web where I'll be sharing content and ideas that I find interesting and engaging. Stay tuned for updates!

# Your existing content...

<!-- Chatbot Interface -->
<div>
  <h2>Chat with My GPT Bot</h2>
  <input type="text" id="userInput" placeholder="Type your message here...">
  <button onclick="sendMessage()">Send</button>
  <div id="chatOutput"></div>
</div>

<!-- Your existing content continues... -->
<script>
  async function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var responseArea = document.getElementById('chatOutput');

    try {
      let response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          prompt: userInput,
          max_tokens: 150
        })
      });

      let data = await response.json();
      responseArea.innerHTML = data.choices[0].text;
    } catch (error) {
      console.error('Error:', error);
      responseArea.innerHTML = 'Error in processing your message.';
    }
  }
</script>
