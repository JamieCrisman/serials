class SessionsController < ApplicationController

    def new
        if logged_in?
            redirect_to new_post_user
        end
    end

    def create
        user = User.find_by(email: params[:session][:email].downcase)
        if (user && user.authenticate(params[:session][:password]))
            log_in user
            redirect_to new_post_path
        else
            flash.now[:danger] = "invalid email/password"
            render :new
        end
    end

    def destroy
        logout
        redirect_to root_path
    end
end
