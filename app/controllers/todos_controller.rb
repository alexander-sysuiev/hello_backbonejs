class TodosController < ApplicationController
  def index
    render :json => Todo.all
  end

  def create
    Todo.create! params[:todo]
    render :json => Todo.all
  end
end