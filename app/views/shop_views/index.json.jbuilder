json.array!(@shop_views) do |shop_view|
  json.extract! shop_view, :id, :shop_view_name, :shop_view_image, :shop_view_description
  json.url shop_view_url(shop_view, format: :json)
end
