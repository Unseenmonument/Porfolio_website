class ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :edit, :update, :destroy]

  before_action :authenticate_user!, only: [:index, :new, :show, :edit]
  

  def index
    @contact = Contact.all
  end

  def new
    @contact = Contact.new
  end

  def show 
  end

  def edit
  end

  def update

    respond_to do |format|
      if @contact.update(contact_params)
        format.html { redirect_to @contact, notice: 'Contact was successfully updated.' }
#        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
#        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @contact = Contact.new(contact_params)

      respond_to do |format|
        if @contact.save
          format.html { redirect_to root_path }
  #        format.json { render :show, status: :created, location: @contact }
        else
          format.html { redirect_to root_path }
  #        format.json { render json: @contact.errors, status: :unprocessable_entity }
        end
      end   
  end

  def destroy
  end


  private
    def set_contact
      @contact = Contact.find(params[:id])
    end

    def contact_params
        params.require(:contact).permit(:full_name, :comment, :email, :phone, :company, :reason)
      end
end
