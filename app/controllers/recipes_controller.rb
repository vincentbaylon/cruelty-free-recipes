class RecipesController < ApplicationController
  require 'rest-client'

  before_action :authorize, except: [:get_recipes, :more_recipes]

  def get_recipes
    id = ENV["APP_ID"]
    key = ENV["APP_KEY"]
    url = "https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=#{id}&app_key=#{key}&health=vegan"

    response = RestClient.get(url)
    render json: response, status: :ok
  end

  def more_recipes
    byebug
    response = RestClient.get(params[:url])
    render json: response, status: :ok
  end

  private
  def recipe_params
    params.permit(:url)
  end
end
