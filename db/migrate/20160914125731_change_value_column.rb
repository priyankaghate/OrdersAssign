class ChangeValueColumn < ActiveRecord::Migration
  def up
  	change_column :orders, :value, :float
  end
  
  def down
  	change_column :orders, :value, :string
  end
end

