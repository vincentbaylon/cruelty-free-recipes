class RecipesController < ApplicationController
  require 'rest-client'

  before_action :authorize, except: [:get_recipes, :more_recipes, :search_more, :search]

  def get_recipes
    response = Rails.cache.fetch(:spoonacular_recipes, expires_in: 1.hours) do
      key = ENV["API_KEY"]
      url = "https://api.spoonacular.com/recipes/complexSearch?number=50&diet=vegan&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&apiKey=#{key}"

      JSON.parse(RestClient.get(url))      
    end

    render json: response, status: :ok
  end

  def more_recipes
    response = Rails.cache.fetch(recipe_params[:offset], expires_in: 1.hours) do
      key = ENV["API_KEY"]
      offset = recipe_params[:offset]
      url = "https://api.spoonacular.com/recipes/complexSearch?number=50&offset=#{offset}&diet=vegan&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=#{key}"

      JSON.parse(RestClient.get(url))
    end

    render json: response, status: :ok
  end

  def search_more
    key = ENV["API_KEY"]
    query = recipe_params[:query]
    intolerance = recipe_params[:intolerance]
    cuisine = recipe_params[:cuisine]
    type = recipe_params[:type]
    offset = recipe_params[:offset]

    url = "https://api.spoonacular.com/recipes/complexSearch?number=50&offset=#{offset}&diet=vegan&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&addRecipeNutrition=true&apiKey=#{key}&query=#{query}&intolerance=#{intolerance}&cuisine=#{cuisine}&type=#{type}"

    response = RestClient.get(url)      
    render json: response, status: :ok
  end

  def search
    key = ENV["API_KEY"]
    query = recipe_params[:query]
    intolerance = recipe_params[:intolerance]
    cuisine = recipe_params[:cuisine]
    type = recipe_params[:type]

    url = "https://api.spoonacular.com/recipes/complexSearch?number=50&diet=vegan&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&addRecipeNutrition=true&apiKey=#{key}&query=#{query}&intolerance=#{intolerance}&cuisine=#{cuisine}&type=#{type}"

    response = RestClient.get(url)      
    render json: response, status: :ok
  end

  private

  def recipe_params
    params.permit(:query, :intolerance, :cuisine, :type, :offset)
  end
end

