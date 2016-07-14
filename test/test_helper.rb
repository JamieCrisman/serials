ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def setup
    @user = User.create(username: "andy", email: "andy@email.com", password: "123abc",
                                                password_confirmation: "123abc")

    @post = Post.new(title: "title", body: "body", user_id: @user.id)
  end
end
