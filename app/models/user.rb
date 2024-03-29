class User < ActiveRecord::Base

    before_save { self.email = email.downcase }
    validates :username, presence: true, uniqueness: { case_sensitive: false}
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false}
    validates :password, presence: true, length: { minimum: 6}
    has_secure_password
    
    has_many :posts
    has_many :reactions
    has_many :genres, through: :posts
    has_many :serials

    def userDetails
        return {
            id: self.id,
            username: self.username
        }
    end
end
