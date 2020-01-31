class ProjectsController < ApplicationController
	before_action :set_project, only: [:show, :edit, :update, :destroy]

  before_action :authenticate_user!

  def new
  	@project = Project.new
  end

  def index
    @projects = Project.all
  end

  def edit
   

  end

  def show
  end

  def update

  	respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end
  	

  def create
  	@project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :new }
        format.js 
      end
    end  
  end

  def destroy
  	@project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:delete_pic1, :delete_pic2, :delete_pic3,:name, :blurb, :description, :language, :git_link, :link, :main_pic, :pic1, :pic2, :pic3)
    end
end