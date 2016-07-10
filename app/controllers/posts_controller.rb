class PostsController < ApplicationController

    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user[:id]
        if @post.save
            flash[:success] = "You have successfully created a post!"
            redirect_to new_post_path
        else
            render :new
        end
    end

    def show
        @post = Post.find(params[:id])
    end

    def destroy

    end

    private

    def post_params
        params.require(:post).permit(:title, :body)
    end
end
