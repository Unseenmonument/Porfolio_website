class AddedForPostgres < ActiveRecord::Migration[5.1]
  
  def change
  		add_column :projects, :pic1_file_name, :string
  		add_column :projects, :pic1_content_type, :string
  		add_column :projects, :pic1_file_size, :integer
  		add_column :projects, :pic1_updated_at, :datetime
  		add_column :projects, :pic2_file_name, :string
  		add_column :projects, :pic2_content_type, :string
  		add_column :projects, :pic2_file_size, :integer
  		add_column :projects, :pic2_updated_at, :datetime
  		add_column :projects, :pic3_file_name, :string
  		add_column :projects, :pic3_content_type, :string
  		add_column :projects, :pic3_file_size, :integer
  		add_column :projects, :pic3_updated_at, :datetime
  		add_column :projects, :main_pic_file_name, :string
  		add_column :projects, :main_pic_content_type, :string
  		add_column :projects, :main_pic_file_size, :integer
  		add_column :projects, :main_pic_updated_at, :datetime
  end
end
