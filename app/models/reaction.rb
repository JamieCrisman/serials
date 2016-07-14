class Reaction < ActiveRecord::Base

    belongs_to :user
    belongs_to :post
    delegate :serial, to: :post
end
