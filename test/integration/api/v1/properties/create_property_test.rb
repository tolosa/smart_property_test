require 'test_helper'

module Api
  module V1
    class CreatePropertyTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }

      before(:each) do
        tenant
      end

      test 'Create a new property' do
        units = FactoryBot.build_list(:unit, 3)
        property = FactoryBot.build(:property, units: units)

        assert_difference 'Property.count', 1 do
          post_property(property_json(property))
        end
      end

      test '[Example] returns the created property' do
        units = FactoryBot.build_list(:unit, 3)
        property = FactoryBot.build(:property, units: units)

        post_property(property_json(property))

        assert_json_match Api::V1::PropertyPattern.new(property).pattern, json
      end

      def post_property(property)
        post('/api/v1/properties', property)
      end

      def property_json(property)
        {
          name: property.name,
          description: property.description,
          address: property.address,
          units_attributes: property.units.map do |unit|
            {
              number: unit.number,
              area: unit.area
            }
          end
        }
      end
    end
  end
end