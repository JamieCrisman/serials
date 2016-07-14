require 'test_helper'

class PostTest < ActiveSupport::TestCase
    

    test "should contain title" do
        @post.title = ""
        assert_not @post.valid?
    end

    test "should contain body" do
        @post.body = ""
        assert_not @post.valid?
    end

    test "should be valid with title, body, user_id" do
        assert @post.valid?
    end

    test "should belong to user" do
        @post.user_id = nil 
        assert_not @post.valid?
    end


end
