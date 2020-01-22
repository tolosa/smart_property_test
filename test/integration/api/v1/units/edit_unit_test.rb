require 'test_helper'

module Api
  module V1
    class EditUnitTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:unit) { FactoryBot.create(:unit) }
      let(:new_number) { 213 }
      let(:new_area) { 'Area Test' }

      before(:each) do
        tenant; unit
      end

      test 'Update a unit' do
        patch_unit(unit, unit_json(unit, new_number, new_area))
        assert_equal new_number, unit.reload.number
        assert_equal new_area, unit.area
      end

      test '[Example] returns the created unit' do
        patch_unit(unit, unit_json(unit, new_number, new_area))

        assert_equal new_number, json["number"]
        assert_equal new_area, json["area"]
      end

      def patch_unit(unit, json)
        put("/api/v1/properties/#{unit.property_id}/units/#{unit.id}", json)
      end

      def unit_json(unit, new_number, new_area)
        {
          id: unit.id,
          number: new_number,
          area: new_area
        }
      end
    end
  end
end