class Product < ActiveRecord::Base
	has_many :line_items
	def self.search(search)
	  if search
	  	p "inside if................."
	    where('name LIKE ?', "%#{search}%")
	    
	  else
	  	p "...................inside else................."
	    nil

	  end
	end
end
