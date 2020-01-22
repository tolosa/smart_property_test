require 'test_helper'

module Api
  module V1
    class EditPropertyTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:property) { FactoryBot.create(:property) }
      let(:new_name) { 'Test' }
      let(:new_number) { 213 }


      before(:each) do
        tenant; property

        FactoryBot.create(:unit, property: property)
      end

      test 'Update a property' do
        patch_property(property.id, property_json(property, new_name, new_number))
        assert_equal new_name, property.reload.name
        assert_equal new_number, property.units[0].number
      end

      test '[Example] returns the created property' do
        sent_json = property_json(property, new_name, new_number)
        patch_property(property.id, sent_json)

        assert_equal new_name, json["name"]
        assert_equal new_number, json["units"][0]["number"]
      end

      def patch_property(id, property)
        put("/api/v1/properties/#{id}", property)
      end

      def property_json(property, new_name, new_number)
        {
          id: property.id,
          name: new_name,
          description: property.description,
          address: property.address,
          units_attributes: property.units.map do |unit|
            {
              id: unit.id,
              number: new_number,
              area: unit.area
            }
          end
        }
      end
    end
  end
end