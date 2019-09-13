class AddTablesToProjects < ActiveRecord::Migration[5.1]
  
  def up
  	add_attachment :projects, :pic1
  	add_attachment :projects, :pic2
  	add_attachment :projects, :pic3
  end

  def down
  	remove_column :projects, :pic1
  	remove_column :projects, :pic2
  	remove_column :projects, :pic3  		
  end
end
