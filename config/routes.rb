Rails.application.routes.draw do
  apipie

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :api_sessions, only: [:create]
      resources :properties, only: [:index, :create, :update] do
        member do
          post :archive
          post :restore
        end

        resources :units, only: [:update, :destroy]
      end
    end
  end

  resources :properties, only: :index

  root 'properties#index'
end
