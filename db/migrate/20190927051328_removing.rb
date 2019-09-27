class Removing < ActiveRecord::Migration[5.1]
  def change
	  	remove_column :contacts, :f_name, :string
	  	remove_column :contacts, :l_name, :string
	 	remove_column :contacts, :full_name_content_type, :string		
	 	remove_column :contacts, :full_name_file_name, :string
	 	remove_column :contacts, :full_name_file_size, :integer
	 	remove_column :contacts, :full_name_updated_at, :datetime

	 	remove_column :contacts, :comment_content_type, :string		
	 	remove_column :contacts, :comment_file_name, :string
	 	remove_column :contacts, :comment_file_size, :integer
	 	remove_column :contacts, :comment_updated_at, :datetime
  	
  end
end
