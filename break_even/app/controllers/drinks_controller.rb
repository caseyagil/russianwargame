class RewardsController < ApplicationController

  def index
    @drinks = Drink.order(:last_name)
  end

  def new
    @drink = Drink.new
  end

  def create
    @drink = Drink.create!(drink_params)
    redirect_to drinks_path
  end

  def show
    @drink = Drink.find(params[:id])
  end

  def edit
    @drink = Drink.find(params[:id])
  end

  def update
    @drink = Drink.find(params[:id])
    @drink.update(drink_params)
    redirect_to drinks_path
  end

  def destroy
    @drink = Drink.find(params[:id])
    @drink.destroy
    redirect_to drinks_path
  end

  private
  def drink_params
    params.require(:drink).permit(:drdrink_type, :calorie_count)
  end
end
