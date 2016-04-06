class DaysController < ApplicationController
  def index
    @days = Day.order(:name_of_day)
  end

  def new
    @day = Day.new
  end

  def create
    @day = Day.create!(day_params)
    redirect_to days_path
  end

  def show
    @day = Day.find(params[:id])
  end

  def edit
    @day = Day.find(params[:id])
  end

  def update
    @day = Day.find(params[:id])
    @day.update(day_params)
    redirect_to days_path
  end

  def destroy
    @day = Day.find(params[:id])
    @day.destroy
    redirect_to days_path
  end

  private
  def day_params
    params.require(:day).permit(:dayname)
  end

end
