Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/facts', to:'facts#index'
    get '/facts/:id', to:'facts#show'
    post '/facts', to: 'facts#create'

    put '/facts:id', to: 'facts#rate'
    put '/facts:id', to: 'facts#update'
    
  end
end
