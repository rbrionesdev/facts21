class Api::FactsController < ApplicationController
  def index
    render json: Fact.all
  end

  def rate
     @fact = Fact.find(params[:id])
     # need the new rating
     @fact.stars = params[:stars]
     @fact.save
     render json: @fact
  end

  def create
    fact = Fact.new(fact_params)
    fact.stars = fact.stars ? fact.stars : 0
    if(fact.save)
      render json: fact
    else
      render json: {error: fact.errors}, status: :unprocessible_entity
    end
  end

  def update
    puts "update called"
    fact = Fact.find(params[:id])
    if(fact.update(fact_params))
      render json: fact
    else
      render json: {error: fact.errors}, status: :unprocessible_entity
    end
  end
  
  private

  def fact_params
    params.require(:fact).permit(:username, :source, :text,:stars)
  end
end
