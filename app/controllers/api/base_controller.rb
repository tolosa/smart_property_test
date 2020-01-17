class Api::BaseController < ActionController::Base
  protect_from_forgery with: :null_session

  before_action :destroy_session
  before_action :authenticate_action

  rescue_from ActiveRecord::RecordInvalid do |exception|
    render json: { errors: exception.record.errors }, status: :unprocessable_entity
  end

  rescue_from ApplicationError do |exception|
    render json: { errors: exception.errors }, status: :unprocessable_entity
  end

  rescue_from ActiveRecord::RecordNotFound do |exception|
    head :not_found
  end

  def authenticate_action
    authenticate_or_request_with_http_token do |token, options|
      @current_api_key = ApiKey.find_by(token: token)

      return @current_api_key.present?
    end
  end

  def current_api_key
    @current_api_key
  end

  def current_tenant
    current_api_key.tenant
  end

  protected

  def destroy_session
    request.session_options[:skip] = true
  end
end
