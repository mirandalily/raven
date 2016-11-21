Rails.application.routes.draw do
  devise_for :users
  root "application#angular"

  resources :users, only: [:index, :show, :update]
  resources :organizations


end
