class Reaction < ActiveRecord::Base

    belongs_to :user
    belongs_to :post
    belongs_to :serial, through: :post
end
