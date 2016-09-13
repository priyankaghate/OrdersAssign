class CreateProducts < ActiveRecord::Migration
  def up
    create_table :products do |t|
      t.string :sku
      t.string :name
      t.integer :quantity
      t.float :length
      t.float :width
      t.float :height
      t.float :weight
      t.float :cost

      t.timestamps null: false
    end
  end
  def down
    drop_table :products
  end
end
