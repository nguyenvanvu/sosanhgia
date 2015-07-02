json.array!(@shops) do |shop|
  json.extract! shop, :id, :shop_name, :shop_image, :shop_description
  json.url shop_url(shop, format: :json)
end
