require 'test_helper'

module Api
  module V1
    class CreateApiSessionTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant, password: "password", api_key: nil) }

      let(:valid_attributes) {{
        access_key: tenant.access_key,
        password: tenant.password
      }}

      context "When the tenant authenticates" do
        test "creates a new api key for the tenant if he didnt have one" do
          assert_nil(tenant.api_key, "Expected to not have an api_key")

          post_tenant_session(valid_attributes)

          refute_nil(tenant.reload.api_key, "Expected to have an api_key")
        end

        test "[Example] returns a Tenant" do
          post_tenant_session(valid_attributes)

          assert_json_match Api::V1::TenantPattern.new(tenant.reload).pattern, json
        end
      end

      context "invalid attributes are submitted" do

        [:access_key, :password].each do |attribute|
          test "[Example] reject blank #{attribute.to_s}" do
            valid_attributes[attribute] = ""
            post_tenant_session(valid_attributes)
            assert_equal(t("errors.messages.blank"), json["errors"][attribute.to_s][0])
          end
        end
      end

      context "When the tenant is not found" do
        test "[Example] returns the error" do
          post_tenant_session(valid_attributes.merge(access_key: "fake_key"))
          assert_equal(t("errors.access_key_athentication.invalid"), json["errors"]["base"])
        end
      end

      context "When the tenant doesn't authenticate" do
        test "returns invalid email or password when password dont match with the tenants" do
          post_tenant_session(valid_attributes.merge(password: "invalid"))
          assert_equal(t("errors.access_key_athentication.invalid"), json["errors"]["base"])
        end
      end

      def post_tenant_session(params)
        post("/api/v1/api_sessions", params)
      end
    end
  end
end
