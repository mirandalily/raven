class CommentsController < ApplicationController

  before_filter :authenticate_user!, only: [:create]

  def create
    organization = Organization.find(params[:organization_id])
    comment = organization.comments.create(comment_params)
    respond_to do |format|
      format.json { render json: organization }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :organization_id, :user_id)
  end
end
