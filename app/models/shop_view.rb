class ShopView
  include Mongoid::Document
  include Mongoid::Timestamps
  field :shop_view_name, type: String
  field :shop_view_image, type: String
  field :shop_view_description, type: String
end
