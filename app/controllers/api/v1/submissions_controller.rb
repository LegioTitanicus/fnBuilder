class Api::V1::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        # @submission.save!
        
        if @submission.save 
            render json: {notice: "Code translation submitted successfully!"} #  
        else
            render json: {notice: "Error: unable to process submission"} # 
        end

        # redirect_to "/"
    end

    def index
        @submissions = Submission.all
        @submission = Submission.all.sample
       
        @submissionsJS = Submission.where(language: "javascript")
        render :json => @submissionsJS.sample.to_json

        @submissionsRB = Submission.where(language: "ruby")
        @rb_submission = @submissionsRB.sample

        @submissionsPY = Submission.where(language: "python")
        @py_submission = @submissionsPY.sample
    end 

    #permit/sanitization
    #params what is sent in the url when you post params doesn't show up, sent via https in the backend.

    def submission_params
        params.require(:submission).permit(:language, :codeBlock, :translation)
    end
end