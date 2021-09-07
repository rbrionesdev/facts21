Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/facts', to:'facts#index'
    put '/facts:id', to: 'facts#rate'
  end
end
