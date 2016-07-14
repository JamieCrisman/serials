class Genre < ActiveRecord::Base
    delegate :user, to: :post
    belongs_to :post
    delegate  :serial, to: :post
end
