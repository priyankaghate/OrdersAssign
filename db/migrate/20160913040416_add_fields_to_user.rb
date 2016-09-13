class AddFieldsToUser < ActiveRecord::Migration
  def up
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :dob, :date
  end

  def down
    remove_column :users, :fname, :string
    remove_column :users, :lname, :string
    remove_column :users, :dob, :date
  end
end
