require "rails_helper"

RSpec.describe Api::V1::SubmissionsController, type: :controller do
  describe 'POST#create' do
  let!(:test_submission) { Submission.create(
    language: "javascript",
    codeBlock: "console.log('hello world')",
    translation: "print hello world"
  ) }

  
  end
end