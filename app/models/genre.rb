class Genre < ActiveRecord::Base
    belongs_to :user, through: :post
    belongs_to :post
    belongs_to :serial, through: :post
end
