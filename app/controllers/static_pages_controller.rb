class StaticPagesController < ApplicationController

    def home
        if logged_in?
            redirect_to new_post_path
        end
    end
end
