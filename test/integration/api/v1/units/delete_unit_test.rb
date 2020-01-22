require 'test_helper'

module Api
  module V1
    class DeleteUnitTest < Api::ApiIntegrationTest
      let(:tenant) { FactoryBot.create(:tenant) }
      let(:unit) { FactoryBot.create(:unit) }

      before(:each) do
        tenant; unit
      end

      test 'Update a unit' do
        assert_difference 'Unit.count', -1 do
          delete_unit(unit)
        end
      end

      test '[Example] returns the deleted unit' do
        delete_unit(unit)

        assert_json_match Api::V1::UnitPattern.new(unit).pattern, json
      end

      def delete_unit(unit)
        delete("/api/v1/properties/#{unit.property_id}/units/#{unit.id}")
      end
    end
  end
end