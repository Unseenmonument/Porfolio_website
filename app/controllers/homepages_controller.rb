class HomepagesController < ApplicationController

	def index
		@contact = Contact.new
		@skills = Skill.all
		@projects = Project.all
	end

	def create
		@contact = Contact.new(contact_params)

	    respond_to do |format|
	      if @contact.save
	        format.html { redirect_to root_path }
	#        format.json { render :show, status: :created, location: @contact }
	      else
	        format.html { render :new }
	#        format.json { render json: @contact.errors, status: :unprocessable_entity }
	      end
	    end		
	end

	private
		def contact_params
	      params.require(:contact).permit(:f_name, :_name, :email, :phone, :company, :reason)
	    end
end
