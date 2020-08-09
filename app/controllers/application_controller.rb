class ApplicationController < ActionController::Base
  respond_to :html, :json #after adding this line it seemed to deal with the 406 error
  # and  "ActionController::UnknownFormat (ActionController::UnknownFormat):""

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
