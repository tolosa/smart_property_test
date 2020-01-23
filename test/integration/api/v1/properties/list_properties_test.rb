require 'test_helper'

module Api
  module V1
    class ListPropertiesTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:properties) { FactoryBot.create_list(:property, 4, :with_units, archived: Faker::Boolean.boolean(true_ratio: 0.5)) }

      before(:each) do
        tenant; properties
      end

      context 'Without Filter' do
        test '[Example] returns a list of properties' do
          get_properties

          assert_json_match Api::V1::PropertyPattern.new.list(properties).pattern, json
        end
      end

      context 'With Filter' do
        let(:property) { FactoryBot.create(:property, :with_units) }
        let(:unit) { FactoryBot.create(:unit) }

        test '[Example] returns a list of properties filtered by property attributes' do
          get_properties(property.name)

          assert_json_match Api::V1::PropertyPattern.new.list([property]).pattern, json
        end

        test '[Example] returns a list of properties filtered by unit attributes' do
          get_properties(unit.number)

          assert_json_match Api::V1::PropertyPattern.new.list([unit.property]).pattern, json
        end
      end

      def get_properties(filter = '')
        get("/api/v1/properties?filter=#{filter}")
      end
    end
  end
end