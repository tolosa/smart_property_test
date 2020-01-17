class Api::V1::ApiSessionsController < Api::V1::BaseController

  skip_before_action :authenticate_action, only: [:create]

  ####### Api Documentation #########
  api :POST, '/v1/api_sessions', 'Create an Tenant session'
  param :access_key, String
  param :password, String
  ###### End of Documentation #######
  def create
    TenantSessionValidator.new.validate!(session_params)
    tenant_authenticates?(tenant, params[:password])
    @api_key = tenant.create_api_key!
  end

  protected

  def tenant
    @tenant ||= Tenant.find_by(access_key: params[:access_key])
  end

  def session_params
    params.permit(:access_key, :password)
  end

  def tenant_authenticates?(tenant, password)
    begin
      raise NonAuthenticatedAccessKeyError unless tenant && tenant.authenticate(password)
    rescue BCrypt::Errors::InvalidHash
      raise NonAuthenticatedAccessKeyError
    end
  end
end
