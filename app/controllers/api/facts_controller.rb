class Api::FactsController < ApplicationController
  def index
    render json: Fact.all
  end
end
