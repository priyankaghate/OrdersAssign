json.extract! product, :id, :sku, :name, :quantity, :length, :width, :height, :weight, :cost, :created_at, :updated_at
json.url product_url(product, format: :json)