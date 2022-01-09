Rails.application.routes.draw do
  resources :favorites
  resources :users
  get '/recipes', to: 'recipes#get_recipes'
  get '/more_recipes/', to: 'recipes#more_recipes'
  post '/search', to: 'recipes#search'
  post '/search_more', to: 'recipes#search_more'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
