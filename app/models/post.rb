class Post < ActiveRecord::Base

    validates :title, presence: true, length: { maximum: 100 }
    validates :body, presence: true,  length: { maximum: 249, 
                                                                                tokenizer: lambda {|str| str.scan(/\s+|$/)}}


    belongs_to :user

end
