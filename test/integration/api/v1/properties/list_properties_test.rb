require 'test_helper'

module Api
  module V1
    class ListPropertiesTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:properties) { FactoryBot.create_list(:property, 3, :with_units) }

      before(:each) do
        tenant; properties
      end

      test '[Example] returns a list of properties' do
        get_properties

        assert_json_match Api::V1::PropertyPattern.new.list(properties).pattern, json
      end

      def get_properties
        get('/api/v1/properties')
      end
    end
  end
end