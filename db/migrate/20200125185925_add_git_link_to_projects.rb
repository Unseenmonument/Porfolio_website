class AddGitLinkToProjects < ActiveRecord::Migration[5.1]
  def change
  	add_column :projects, :git_link, :string
  end
end
