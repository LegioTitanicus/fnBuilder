require "pry"
require "google/cloud/language"



class Api::V1::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        @submission.user_id = current_user.id

        if @submission.save!
            # write thing that was just created on a new line in CSV file
            render json: {notice: "Code translation submitted successfully!"} #  
        else
            render json: {notice: "Error: unable to process submission"} # 
        end
        
        # redirect_to "/"
    end
    
    def index   
        submissions = Submission.where(user_id: current_user.id)
        binding.pry
        if submissions.length == 0
            render json: { submissions: {} }
        else 
            render json: submissions 
        end 
    end 

    def show
        # ratings = Rating.where(user: current_user)
        render json: Submission.find(params[:id])
    end

    def update
        submission = Submission.find(params[:id])
        submission.language = params["language"]
        submission.translation = params["translation"]
        submission.codeBlock = params["codeBlock"]
        submission.save

        render json: submission
    end

    def destroy
        submission = Submission.find(params[:id])
        submission.delete

        render json: current_user.submissions
    end


    def submission_params
        params.require(:submission).permit(:language, :codeBlock, :translation)
    end
end