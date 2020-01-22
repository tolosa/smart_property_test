class Api::V1::UnitsController < Api::V1::BaseController
  ####### Api Documentation #########
  api :PATCH, '/v1/properties/:property_id/units/:id', 'Updates an Unit'
  param :number, String
  param :area, String
  ###### End of Documentation #######
  def update
    @unit = Unit.find(params[:id])
    @unit.update(unit_params)
  end

  ####### Api Documentation #########
  api :DELETE, '/v1/properties/:property_id/units/:id', 'Delete an Unit'
  ###### End of Documentation #######
  def destroy
    @unit = Unit.find(params[:id])
    @unit.destroy
  end

  protected

  def unit_params
    params.permit(:number, :area)
  end
end
