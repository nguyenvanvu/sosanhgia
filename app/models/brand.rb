class Brand
  include Mongoid::Document
  include Mongoid::Timestamps
  field :band_name, type: String
  field :brand_image, type: String
  field :brand_description, type: String
	
	embeds_many :products
end
