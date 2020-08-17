class Rating < ApplicationRecord
    validates :rating
    
    belongs_to :submission
    belongs_to :user
end