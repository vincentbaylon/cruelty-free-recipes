class RanksController < ApplicationController
  before_action :set_rank, only: [:show, :update, :destroy]
  before_action :authorize, except: [:index]

  # GET /ranks
  def index
    render json: Rank.all, status: :ok
  end

  # GET /ranks/1
  def show
    render json: @rank, status: :ok
  end

  # POST /ranks
  def create
    render json: Rank.create!(rank_params), status: :created
  end

  # PATCH/PUT /ranks/1
  def update
    @rank.update!(rank_params)
    render json: @rank, status: :accepted
  end

  # DELETE /ranks/1
  def destroy
    @rank.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rank
      @rank = Rank.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rank_params
      params.permit(:ref_key, :comment, :rank, :user_id, :id)
    end
end
