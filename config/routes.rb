Rails.application.routes.draw do
  devise_for :users
  root "application#angular"

  resources :users, defaults: { format: 'json'}

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :organizations, defaults: { format: 'json'}
    end
  end

end
