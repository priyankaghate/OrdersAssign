class CreateAddresses < ActiveRecord::Migration
  def up
    create_table :addresses do |t|
      t.string :city
      t.string :state
      t.integer :pin
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
  def down
  	drop_table :addresses
  end
end
