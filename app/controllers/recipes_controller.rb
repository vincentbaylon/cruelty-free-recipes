class RecipesController < ApplicationController
  require 'rest-client'

  before_action :authorize, except: [:get_recipes, :more_recipes]

  def get_recipes
    response = Rails.cache.fetch(:recipes, expires_in: 12.hours) do
      id = ENV["APP_ID"]
      key = ENV["APP_KEY"]
      url = "https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=#{id}&app_key=#{key}&health=vegan"
      JSON.parse(RestClient.get(url))      
    end

    render json: response, status: :ok
  end

  def more_recipes
    # byebug
    id = ENV["APP_ID"]
    key = ENV["APP_KEY"]
    nextLink = recipe_params[:nextLink]
    url = "https://api.edamam.com/api/recipes/v2?q=vegan&app_key=#{key}&#{nextLink}&health=vegan&type=public&app_id=#{id}"

    response = RestClient.get(url)      
    render json: response, status: :ok
  end

  private

  def recipe_params
    params.permit(:nextLink)
  end
end


