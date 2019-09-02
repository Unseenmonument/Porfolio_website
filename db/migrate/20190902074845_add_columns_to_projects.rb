class AddColumnsToProjects < ActiveRecord::Migration[5.1]
  def change
  	add_column :projects, :blurb, :string
  	add_column :projects, :pic1, :string
  	add_column :projects, :pic2, :string
  	add_column :projects, :pic3, :string
  end
end
