import os
import re
import requests
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import time

def check_link(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.head(url, headers=headers, timeout=5)
        return response.status_code
    except requests.exceptions.RequestException as e:
        return str(e)

def check_posts_for_dead_links():
    posts_dir = os.path.join(os.path.dirname(__file__), 'src', 'content', 'posts')
    
    if not os.path.exists(posts_dir):
        print(f"Error: Posts directory not found at {posts_dir}")
        return

    print("Checking for dead links in posts...")
    print("-" * 80)

    for filename in os.listdir(posts_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(posts_dir, filename)
            
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()

            # Find all markdown links
            link_pattern = r'\[(.*?)\]\((https?:\/\/[^\)]+)\)'
            links = re.finditer(link_pattern, content)

            for match in links:
                link_text = match.group(1)
                link_url = match.group(2)
                
                # Skip relative links
                if not link_url.startswith('http'):
                    continue

                # Check the link
                print(f"Checking link in {filename}: {link_url}")
                result = check_link(link_url)
                
                if isinstance(result, int) and result >= 400:
                    print(f"❌ Dead link found!")
                    print(f"  File: {filename}")
                    print(f"  Text: {link_text}")
                    print(f"  URL: {link_url}")
                    print(f"  Status: {result}")
                    print("\n")
                elif isinstance(result, str):
                    print(f"❌ Error checking link!")
                    print(f"  File: {filename}")
                    print(f"  Text: {link_text}")
                    print(f"  URL: {link_url}")
                    print(f"  Error: {result}")
                    print("\n")

                # Add a small delay to be polite to servers
                time.sleep(0.5)

    print("\n✅ Link checking completed!")

if __name__ == "__main__":
    check_posts_for_dead_links()
