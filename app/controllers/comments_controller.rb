class CommentsController < ApplicationController

  before_filter :authenticate_user!, only: [:create]

  def create
    organization = Organization.find(params[:organization_id])
    comment = organization.comments.create(comment_params.merge(user_id: current_user.id))
    respond_with organization, comment
  end

  private
  
  def comment_params
    params.require(:comment).permit(:body)
  end
end
