json.extract! order, :id, :order_number, :tracking_number, :delivery_date, :value, :currency, :is_express_delivery, :is_customer_pickup, :user_id, :created_at, :updated_at
json.url order_url(order, format: :json)