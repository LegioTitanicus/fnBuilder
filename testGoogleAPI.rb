require "pry"
# Imports the Google Cloud client library
require "google/cloud/language"

google_key = ENV["GOOGLE_APPLICATION_CREDENTIALS"]
test = ENV["TEST"]
keys = ENV.keys
# binding.pry
# Instantiates a client
# This is the line that essentially makes the API call with credentials, etc
language = Google::Cloud::Language.language_service

# The text to analyze
# textN = "I hate you. You're the worst, never again, hope you die."
textP = "I love you. You're the best, an angel."
# Detects the sentiment of the text
documentP = { content: textP, type: :PLAIN_TEXT }
responseP = language.analyze_sentiment document: documentP



# documentN = { content: textN, type: :PLAIN_TEXT }
# responseN = language.analyze_sentiment document: documentN

# Get document sentiment from response
sentimentP = responseP.document_sentiment

puts "Text: #{textP}"
puts "Score: #{sentimentP.score}, #{sentimentP.magnitude}"

# sentimentN = responseN.document_sentiment

# puts "Text: #{textN}"
# puts "Score: #{sentimentN.score}, #{sentimentN.magnitude}"