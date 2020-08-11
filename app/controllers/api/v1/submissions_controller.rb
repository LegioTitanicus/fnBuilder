class Api::V1::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        # @submission.save!

        if @submission.save 
            render json: { notice: "Code translation submitted successfully!" }
        else
            render json: { notice: "Error: unable to process submission" }
        end

        # redirect_to "/"
    end

    def index
        @submissions = Submission.all
        @submission = Submission.all.sample
        @submissionJS = Submission.find_by(language: "javascript").sample
        @submissionRB = Submission.find_by(language: "ruby").sample
        @submissionPY = Submission.find_by(language: "python").sample
    end 

    #permit/sanitization
    #params what is sent in the url when you post params doesn't show up, sent via https in the backend.

    def submission_params
        params.require(:submission).permit(:language, :codeBlock, :translation)
    end
end