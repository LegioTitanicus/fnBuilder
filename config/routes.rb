Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get "/login", to: 'homes#index'
  # get "/sign_up", to: "homes#index"

  resources :submissions #, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :submissions, only: [:create, :index, :update, :destroy, :show]
    end
  end

end
