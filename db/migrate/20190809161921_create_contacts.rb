class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :f_name
      t.string :l_name
      t.string :company
      t.text :reason
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
