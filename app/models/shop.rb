class Shop
  include Mongoid::Document
  include Mongoid::Timestamps
  field :shop_name, type: String
  field :shop_image, type: String
  field :shop_description, type: String

  embedded_in :product, inverse_of: :shops
end
