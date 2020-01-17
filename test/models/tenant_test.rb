require "test_helper"

describe Tenant do
  let(:tenant) { Tenant.new }

  it "must be valid" do
    value(tenant).must_be :valid?
  end
end
