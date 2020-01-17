require "test_helper"

describe ApiKey do
  let(:api_key) { ApiKey.new }

  it "must be valid" do
    value(api_key).must_be :valid?
  end
end
