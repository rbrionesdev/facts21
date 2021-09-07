class Api::FactsController < ApplicationController
  before_action :set_fact, only:[:show, :update, :destroy, :rate]
  
  def index
    render json: Fact.all
  end

  def show
    render json: @fact
  end

  

  def rate
    puts "rate called"
     @fact.stars = params[:stars]
     @fact.save
     render json: @fact
  end

  def create
    @fact.stars = @fact.stars ? @fact.stars : 0
    if(fact.save)
      render json: @fact
    else
      render json: {error: @fact.errors}, status: :unprocessible_entity
    end
  end

  def update
    puts "update called"
    if(@fact.update(fact_params))
      render json: @fact
    else
      render json: {error: @fact.errors}, status: :unprocessible_entity
    end
  end

  def destroy
    render json: @fact.destroy
  end


  private

  def fact_params
    params.require(:fact).permit(:username, :source, :text,:stars)
  end

  def set_fact
    @fact = Fact.find(params[:id])
  end
end
