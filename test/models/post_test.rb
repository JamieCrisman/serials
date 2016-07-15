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

    test "should not post with 251 char" do
        @post.body = ""
        (1..251).each do 
            @post.body += "a "
        end
        assert_not @post.valid?
    end

    test "should post with 250 char" do
        @post.body = ""
        (1..250).each do
            @post.body += "a "
        end
        assert @post.valid?
    end

    test "shuld post with special characters" do
         
        @post.body =  "William S. Burroughs called this ``cut up theory.'' His approach was to take a page of text, divide it into quadrants, rearrange the quadrants, and then read the page across the divisions. He wrote this way; writing, cutting up, shuffling, publishing the result. Collage and randomness applied to words. He saw this as a way of escaping from a prison that words create for us, locking us down into one way of thinking: an idea echoed in Orwell's ``1984,'' where the purpose of NewSpeak was to make ThoughtCrime impossible by making it inexpressible: ``The Revolution will be complete when the language is perfect.''
        William S. Burroughs called this ``cut up theory.'' His approach was to take a page of text, divide it into quadrants, rearrange the quadrants, and then read the page across the divisions. He wrote this way; writing, cutting up, shuffling, publishing the result. Collage and randomness applied to words. He saw this as a way of escaping from a prison that words create for us, locking us down into one way of thinking: an idea echoed in Orwell's ``1984,'' where the purpose of NewSpeak was to make ThoughtCrime impossible by making it inexpressible: ``The Revolution will be complete when the language is perfect.''
        William S. Burroughs called this ``cut up theory.'' "
       # puts "#{@post.body_size} size"
        assert @post.valid?
    end
end
