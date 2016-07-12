class Serial < ActiveRecord::Base
    belongs_to :user
    has_many :posts
    has_many :genres, through: :posts
    has_many :reactions, through: :posts
end
