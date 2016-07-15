class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token, if: :api_request?

    def new
        if logged_in?
            redirect_to new_post_user
        end
    end

    def create
        user = User.find_by(email: params[:session][:email].downcase)
        if (user && user.authenticate(params[:session][:password]))
            test = {name: 'hi'}

            respond_to do |format|
                format.html {log_in user; redirect_to new_post_path}
                format.json {log_in user; render :json => test, :content_type => "text/json"}
            end
        else
            test = {name: 'error'}
            respond_to do |format|
                format.html {flash.now[:danger] = "invalid email/password"; render :new}
                format.json {render :json => test, :content_type => "text/json"}
            end
        end
    end

    def destroy
        logout
        redirect_to root_path
    end

    private
    def api_request?
        request.format.json? || request.format.xml?
    end
end
