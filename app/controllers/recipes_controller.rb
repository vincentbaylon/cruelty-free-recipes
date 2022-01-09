class RecipesController < ApplicationController
  require 'rest-client'

  before_action :authorize, except: [:get_recipes, :more_recipes, :search_more, :search]

  def get_recipes
    response = Rails.cache.fetch(:spoonacular_recipes, expires_in: 12.hours) do
      key = ENV["API_KEY"]
      url = "https://api.spoonacular.com/recipes/complexSearch?number=100&diet=vegan&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=#{key}"

      JSON.parse(RestClient.get(url))      
    end

    render json: response, status: :ok
  end

  def more_recipes
    response = Rails.cache.fetch(:more_new_recipes, expires_in: 12.hours) do
      key = ENV["API_KEY"]
      url = "https://api.spoonacular.com/recipes/complexSearch?number=100&offset=100&diet=vegan&addRecipeInformation=true&instructionsRequired=true&apiKey=#{key}"

      JSON.parse(RestClient.get(url))      
    end

    render json: response, status: :ok
  end

  def search_more
    id = ENV["APP_ID"]
    key = ENV["APP_KEY"]
    nextLink = recipe_params[:nextLink]
    query = recipe_params[:query]
    health = recipe_params[:health]
    cuisine = recipe_params[:cuisine]
    meal = recipe_params[:meal]
    dish = recipe_params[:dish]
    url = "https://api.edamam.com/api/recipes/v2?q=#{query}&app_key=#{key}#{meal}&#{nextLink}&health=vegan#{health}#{cuisine}&type=public&app_id=#{id}"

    response = RestClient.get(url)      
    render json: response, status: :ok
  end

  def search
    id = ENV["APP_ID"]
    key = ENV["APP_KEY"]
    query = recipe_params[:query]
    health = recipe_params[:health]
    cuisine = recipe_params[:cuisine]
    meal = recipe_params[:meal]
    dish = recipe_params[:dish]
    url = "https://api.edamam.com/api/recipes/v2?type=public&q=#{query}&app_id=#{id}&app_key=#{key}&health=vegan#{health}#{cuisine}#{dish}#{meal}"

    puts url
    response = RestClient.get(url)      
    render json: response, status: :ok
  end

  private

  def recipe_params
    params.permit(:nextLink, :query, :health, :cuisine, :meal, :dish)
  end
end


# https://api.edamam.com/api/recipes/v2?type=public&q=#{query}&app_id=#{id}&app_key=#{key}#{health}#{cuisine}#{meal}&health=gluten-free&cuisineType=Asian&mealType=Lunch
