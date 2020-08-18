google_key = ENV["GOOGLE_APPLICATION_CREDENTIALS"]
keys = ENV.keys
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
binding.pry
puts "Text: #{textP}"
puts "Score: #{sentimentP.score}, #{sentimentP.magnitude}"

# sentimentN = responseN.document_sentiment

# puts "Text: #{textN}"
# puts "Score: #{sentimentN.score}, #{sentimentN.magnitude}"
# @submissions = Submission.all
# @submission = Submission.all.sample

# @submissionsJS = Submission.where(language: "javascript")
# render :json => @submissionsJS.sample.to_json

# @submissionsRB = Submission.where(language: "ruby")
# @rb_submission = @submissionsRB.sample

# @submissionsPY = Submission.where(language: "python")
# @py_submission = @submissionsPY.sample
@testTestTest = "Score: #{sentimentP.score}, #{sentimentP.magnitude}"
binding.pry

# Imports the Google Cloud client library