class AddContatcsForPostgres < ActiveRecord::Migration[5.1]
  def change
  	#not needed for sqllite3?
  	add_column :contacts, :full_name, :string
  	add_column :contacts, :comment, :text

  end
end
