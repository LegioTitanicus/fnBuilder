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
        user_subs = current_user.submissions
        # user_subs.each do |submission|
        #     total_score = 0
        #     submission.ratings.each |rating|
        #         total_score += rating
        #     end
        #     average = total_score / submission.ratings.length
            
        #     submission["id"]["average"] = average
        # end
        render json: user_subs
        

        # offset = rand(Submission.count)
        # rand_record = Submission.offset(offset).first

        
        # render json: Submission.where(user_id: current_user.id)
        #if submissions.length == 0
         #   render json: { submissions: {} }
        #else 
         #   render json: submissions 
        #end 
        
    end 

    def show
        rand_record = Submission.all.sample
        render json: rand_record
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