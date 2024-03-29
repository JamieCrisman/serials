class UsersController < ApplicationController

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            flash[:success] = "You have successfully made an account"
            redirect_to new_post_path
        else
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
    end
    
    private 

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
