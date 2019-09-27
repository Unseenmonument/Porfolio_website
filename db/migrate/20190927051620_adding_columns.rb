class AddingColumns < ActiveRecord::Migration[5.1]
  def change
  		add_column :projects, :main_pic, :string
  		add_column :contacts, :full_name, :string
	  	add_column :contacts, :comment, :string
  end
end
