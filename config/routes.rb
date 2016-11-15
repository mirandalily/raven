Rails.application.routes.draw do
  devise_for :users
  root "application#home"

  resources :users, defaults: { format: 'json'}

  resources :organizations, defaults: { format: 'json'}
end
