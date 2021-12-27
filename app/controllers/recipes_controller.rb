class RecipesController < ApplicationController
  require 'rest-client'

  before_action :authorize, except: :get_recipes

  def get_recipes
    url = "https://api.spoonacular.com/recipes/random?number=25&tags=vegan&apiKey=" + ENV["API_KEY"]
    response = RestClient.get(url)
    render json: response, status: :ok
  end
end
