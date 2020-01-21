require 'test_helper'

module Api
  module V1
    class RestorePropertyTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:property) { FactoryBot.create(:property, archived: true) }

      before(:each) do
        tenant; property
      end

      test 'Restores the property' do
        post_restore_property(property.id)

        refute(property.reload.archived)
      end

      test '[Example] returns the restored property' do
        post_restore_property(property.id)

        assert_json_match Api::V1::PropertyPattern.new(property).pattern, json
      end

      def post_restore_property(id)
        post("/api/v1/properties/#{id}/restore")
      end
    end
  end
end