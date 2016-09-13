class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def login_required
	    redirect_to(new_user_session_path) if current_user.blank?
	end

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:fname, :lname, :dob, :email, :password, :password_confirmation, addresses_attributes: [:id,:city, :state, :pin]])
      devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :password_confirmation, :current_user, addresses_attributes: [:id, :city, :state, :pin]])
    end
end
