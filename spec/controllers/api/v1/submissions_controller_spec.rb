require "rails_helper"

RSpec.describe Api::V1::SubmissionsController, type: :controller do
  let!(:test_submission) { Submission.create(
    language: "javascript",
    codeBlock: "console.log('hello world')",
    translation: "print hello world"
  ) }

  let!(:first_flavor) { Flavor.create(
    name: "Chocolatey Goodness",
    description: "It is brown.",
    image_url: "www.chocolate.com",
    region: first_region
  )}

  describe "GET#show" do
  it "should display flavor details associated with one region" do
    get :show, params: { region_id: first_region.id, id: first_flavor.id }
    returned_json = JSON.parse(response.body)

    expect(response.status).to eq(200)
    expect(response.content_type).to eq("application/json")

    expect(returned_json["flavorData"]["name"]).to eq("Chocolatey Goodness")
    expect(returned_json["flavorData"]["description"]).to eq("It is brown.")
    expect(returned_json["flavorData"]["image_url"]).to eq("www.chocolate.com")
    end
  end
end