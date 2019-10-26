class SkillsController < ApplicationController
	before_action :set_skill, only: [:show, :edit, :update, :destroy]

  before_action :authenticate_user!

  def index
  	@skills = Skill.all
  end

  def new
  	@skill = Skill.New
  end

  def edit

  end

  def show
  end

  def update
  	respond_to do |format|
      if @skill.update(skills_params)
        format.html { redirect_to @skill, notice: 'Skill was successfully updated.' }
        format.json { render :show, status: :ok, location: @skill }
      else
        format.html { render :edit }
        format.json { render json: @skill.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
  	@skill.destroy
    respond_to do |format|
      format.html { redirect_to skills_url, notice: 'Skill was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def create

  	@skill = Skill.new(skill_params)

    respond_to do |format|
      if @skill.save
        format.html { redirect_to @skill, notice: 'Skill was successfully created.' }
        format.json { render :show, status: :ok, location: @skill }
      else
        format.html { render :new }
        format.js 
      end
    end  
  end

  private
    def set_skill
      @skill = Skill.find(params[:id])
    end

    def skills_params
      params.require(:skill).permit(:name, :proficientcy)
    end

end
