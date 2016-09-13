class CreateLineItems < ActiveRecord::Migration
  def up
    create_table :line_items do |t|
      t.references :order, index: true, foreign_key: true
      t.references :product, index: true, foreign_key: true
      t.string :sku
      t.integer :quantity
      t.float :cost
      t.string :description

      t.timestamps null: false
    end
  end
  def down
    drop_table :line_items
  end
end
