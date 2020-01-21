class Api::V1::PropertiesController < Api::V1::BaseController

  skip_before_action :authenticate_action, only: [:index]

  ####### Api Documentation #########
  api :GET, '/v1/properties', 'List all properties'
  ###### End of Documentation #######
  def index
    @properties = Property.all
  end

end
