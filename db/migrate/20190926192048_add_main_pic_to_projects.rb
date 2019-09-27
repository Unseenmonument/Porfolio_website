class AddMainPicToProjects < ActiveRecord::Migration[5.1]
  	def up
	  	add_attachment :projects, :main_pic
	  	add_attachment :contacts, :full_name
	  	add_attachment :contacts, :comment
	end

	def down
	  	remove_column :contacts, :f_name
	  	remove_column :contacts, :l_name
	 			
	end
end
