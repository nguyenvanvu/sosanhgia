json.array!( @products) do |product|
  json.extract! product, :id, :product_name, :product_image, :product_description
  json.url brand_product_url(@brand, product, format: :json)
end
