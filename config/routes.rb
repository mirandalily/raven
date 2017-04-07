Rails.application.routes.draw do

  devise_for :users
  root "application#angular"
  resources :organizations do
    resources :comments
  end
  resources :categories, only: [:index, :show]

end
