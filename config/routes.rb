Rails.application.routes.draw do

  devise_for :users
  root "application#angular"
  resources :organizations
  resources :categories, only: [:index, :show]

end
