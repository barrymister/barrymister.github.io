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
      // Replace 'username' and 'repository' with your GitHub username and repo
      let response = await fetch('https://api.github.com/repos/barrymister/barrymister.github.io/dispatches', {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          // The token here is for GitHub, not OpenAI. But remember, embedding this in frontend code is not secure.
          Authorization: 'token YOUR_GITHUB_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'openai-query',
          client_payload: { prompt: userInput }
        })
      });

      // Handle the response...
    } catch (error) {
      console.error('Error:', error);
      responseArea.innerHTML = 'Error in processing your message.';
    }
  }
</script>

