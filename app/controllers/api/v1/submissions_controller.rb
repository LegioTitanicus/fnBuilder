require "pry"
require "google/cloud/language"



class Api::V1::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        # @submission.save!
        
        if @submission.save 
            # write thing that was just created on a new line in CSV file
            render json: {notice: "Code translation submitted successfully!"} #  
        else
            render json: {notice: "Error: unable to process submission"} # 
        end
        
        # redirect_to "/"
    end
    
    def index
        google_key = ENV["GOOGLE_APPLICATION_CREDENTIALS"]
        test = ENV["TEST"]
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

end 

    #permit/sanitization
    #params what is sent in the url when you post params doesn't show up, sent via https in the backend.
    
    def submission_params
        params.require(:submission).permit(:language, :codeBlock, :translation)
    end
end