class Order < ActiveRecord::Base
  belongs_to :user
  has_many :line_items, dependent: :destroy
  accepts_nested_attributes_for :line_items, reject_if: proc { |a| a['sku'].blank? }
end
