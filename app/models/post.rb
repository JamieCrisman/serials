class Post < ActiveRecord::Base
    attr_reader :body_size

    validates :title, presence: true, length: { maximum: 100 }
    validates :body, presence: true
    validate :body_token_count
    validates :user_id, presence: true                                                                            
   
    belongs_to :user
    has_many :genres
    belongs_to :serial
    has_many :reactions

    def body_token_count
      if  self.word_count > 250
            errors.add(:post, "body cannot be greater than 250 words")
        end
    end
    
    def word_count
        words = WordsCounted.count(self.body).token_count
        numbers = WordsCounted::Tokeniser.new(self.body).tokenise(pattern: /[\p{N}..]+[\p{N},.]+/).count
        words + numbers
    end
end
