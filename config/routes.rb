Rails.application.routes.draw do
  resources :favorites
  resources :users
  get '/recipes', to: 'recipes#get_recipes'
  post '/more_recipes/', to: 'recipes#more_recipes'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
