class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  field :product_name, type: String
  field :product_image, type: String
  field :product_description, type: String

  embedded_in :brand, inverse_of: :products
  embeds_many :shops
end
