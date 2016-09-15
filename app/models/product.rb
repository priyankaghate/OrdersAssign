class Product < ActiveRecord::Base
	has_many :line_items
	
	def self.search(search)
	  if search.present?
	    where('name LIKE ?', "%#{search}%")
	  else
	    nil
	  end
	end
end
