class AddTablesToProjects < ActiveRecord::Migration[5.1]
  
#  def up
#    add_column :projects, :pic1, :string
#    add_column :projects, :pic2, :string
#    add_column :projects, :pic3, :string
#  end

  def change
    remove_attachment :projects, :pic1
    remove_attachment :projects, :pic2
    remove_attachment :projects, :pic3
 #   remove_column :main_pic
    remove_attachment :main_pic
  end
end
