class Post < ActiveRecord::Base

    validates :title, presence: true, length: { maximum: 100 }
    validates :body, presence: true,  length: { maximum: 249, 
                                                                                tokenizer: lambda {|str| str.scan(/\s+|$/)}}

    validates :user_id, presence: true                                                                            
    belongs_to :user
    has_many :genres
    belongs_to :serial
    has_many :reactions
end
