class Submission < ApplicationRecord
    # validates :user_id, presence: true
    validates :language, presence: true
    validates :codeBlock, presence: true
    validates :translation, presence: true

    belongs_to :user
    has_many :rating
end 