Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/facts', to:'facts#index'
    post '/facts', to:"facts#create"
    get '/facts/:id', to:"facts#show"
    delete '/facts/:id', to:"facts#destroy"
   
    put '/facts/:id/rate', to: 'facts#rate'
    put '/facts/:id', to: 'facts#update'
  end
end
