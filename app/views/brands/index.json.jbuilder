json.array!(@brands) do |brand|
  json.extract! brand, :id, :band_name, :brand_image, :brand_description
  json.url brand_url(brand, format: :json)
end
