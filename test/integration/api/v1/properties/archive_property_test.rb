require 'test_helper'

module Api
  module V1
    class ArchivePropertyTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:property) { FactoryBot.create(:property) }

      before(:each) do
        tenant; property
      end

      test 'Archives the property' do
        post_archive_property(property.id)

        assert(property.reload.archived)
      end

      test '[Example] returns the archived property' do
        post_archive_property(property.id)

        assert_json_match Api::V1::PropertyPattern.new(property).pattern, json
      end

      def post_archive_property(id)
        post("/api/v1/properties/#{id}/archive")
      end
    end
  end
end