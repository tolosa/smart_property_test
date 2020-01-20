Rails.application.routes.draw do
  apipie

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :api_sessions, only: [:create]
    end
  end

  resources :properties, only: :index

  root 'properties#index'
end
