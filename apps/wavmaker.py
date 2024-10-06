from gtts import gTTS
from pydub import AudioSegment
import os

# Text to be spoken
text = "WSDH6 4 9 GMRS repeater in Vista Woods"

# Paths for output files
output_dir = "E:/Sync/gdrive/barrymister.github.io/barrymister.github.io/apps"
mp3_path = os.path.join(output_dir, "repeater_id.mp3")
wav_path = os.path.join(output_dir, "repeater_id.wav")

# Create the output directory if it doesn't exist (shouldn't need this if directory already exists)
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Generate the TTS with Google Text-to-Speech (female voice, English)
tts = gTTS(text=text, lang='en', slow=False)

# Save the output to an MP3 file
tts.save(mp3_path)
print(f"MP3 saved at: {mp3_path}")

# Convert the MP3 to WAV using pydub
audio = AudioSegment.from_mp3(mp3_path)
audio.export(wav_path, format="wav")
print(f"WAV saved at: {wav_path}")

# Optionally clean up the MP3 file if no longer needed
if os.path.exists(mp3_path):
    os.remove(mp3_path)
    print(f"Removed MP3 file: {mp3_path}")
