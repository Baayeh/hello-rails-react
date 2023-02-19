Rails.application.routes.draw do
  root 'messages#main'
  
  namespace :api do
    namespace :v1 do
      resources :messages, only: :index
    end
  end
end
