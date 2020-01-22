class Api::V1::PropertiesController < Api::V1::BaseController
  ####### Api Documentation #########
  api :GET, '/v1/properties', 'List all properties'
  ###### End of Documentation #######
  def index
    @properties = Property.active
  end

  ####### Api Documentation #########
  api :POST, '/v1/properties', 'Creates a Property'
  param :name, String
  param :description, String
  param :address, String
  param :units_attributes, Hash do
    param :number, String
    param :area, String
  end
  ###### End of Documentation #######
  def create
    @property = Property.create!(properties_params)
  end

  ####### Api Documentation #########
  api :PATCH, '/v1/properties/:id', 'Updates a Property'
  param :id, String
  param :name, String
  param :description, String
  param :address, String
  param :units_attributes, Hash do
    param :id, String
    param :number, String
    param :area, String
  end
  ###### End of Documentation #######
  def update
    @property = Property.active.find(params[:id])
    @property.update(properties_params)
  end

  ####### Api Documentation #########
  api :POST, '/v1/properties/:id/archive', 'Archives a Property'
  ###### End of Documentation #######
  def archive
    @property = Property.active.find(params[:id])
    @property.update(archived: true)
  end

  ####### Api Documentation #########
  api :POST, '/v1/properties/:id/restore', 'Restore a Property'
  ###### End of Documentation #######
  def restore
    @property = Property.archived.find(params[:id])
    @property.update(archived: false)
  end

  protected

  def properties_params
    params.permit(:name, :description, :address, units_attributes: [:id, :number, :area])
  end
end
