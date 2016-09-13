class CreateOrders < ActiveRecord::Migration
  def up
    create_table :orders do |t|
      t.integer :order_number
      t.integer :tracking_number
      t.date :delivery_date
      t.string :value
      t.string :currency
      t.boolean :is_express_delivery
      t.boolean :is_customer_pickup
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
  def down
    drop_table :orders
  end
end
