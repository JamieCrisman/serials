require 'test_helper'

class UserTest < ActiveSupport::TestCase

    test "should be valid" do
        assert @user.valid?        
    end

    test "username should not be blank" do
        @user.username =""
        assert_not @user.valid?
    end

    test "password should be at least 6 characters" do
        @user.password = "123"
        @user.password_confirmation = "123"
        assert_not @user.valid?
    end
end
