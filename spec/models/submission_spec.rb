require 'rails_helper'

RSpec.describe Submission, type: :model do
  it "is valid with valid attributes" do
    expect(Submission.new(language: "javascript", codeBlock: "console.log('hello world')", translation: "print hello world").to be_valid
  end

  it { should have_valid(:language).when("javascript") }
  it { should_not have_valid(:language).when(nil, "") }

  it { should have_valid(:codeBlock).when("console.log('hello world')") }
  it { should_not have_valid(:codeBlock).when(nil, "") }

  it { should have_valid(:translation).when("print hello world") }
  it { should_not have_valid(:translation).when(nil, "") }


end