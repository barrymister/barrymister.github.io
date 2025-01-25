import requests

# Replace with your raw webhook URL (do not use Markdown format)
webhook_url = "https://discord.com/api/webhooks/1332760649855664160/vz5WXbEokwxS7mlEb5g219v_3w3zPAZ0u4Hj1CLvE--PuJ6Fi3NYpKvbKa9ZiHu1ro6A"

# JSON data to send
data = {
    "embeds": [
        {
            "title": "Instagram Models",
            "description": (
                "1. [Model 1](https://www.instagram.com/model1)\n"
                "2. [Model 2](https://www.instagram.com/model2)\n"
                "3. [Model 3](https://www.instagram.com/model3)\n"
                "4. [Model 4](https://www.instagram.com/model4)\n"
                "5. [Model 5](https://www.instagram.com/model5)"
            )
        }
    ]
}

# Send the POST request to Discord
response = requests.post(webhook_url, json=data)

if response.status_code == 204:
    print("Message sent successfully!")
else:
    print(f"Failed to send message. HTTP Status Code: {response.status_code}")
