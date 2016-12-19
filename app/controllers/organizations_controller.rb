class OrganizationsController < ApplicationController

  def index
    @organizations = Organization.all
    render json: @organizations
  end

  def show
    @organization = Organization.find(params[:id])
    render json: @organization
  end

  def create
    @organization = Organization.new(organization_params.merge(user_id: current_user.id))
    if @organization.save
      respond_to do |format|
        format.json { render json: @organization }
      end
    end
  end

  def update
    @organization = Organization.find(params[:id])
    if @organization.update(organization_params)
      respond_to do |format|
        format.json { render json: @organization }
      end
    end
  end

  def destroy
    respond_with(Organization.destroy(params[:id]))
  end

  def upvote
	  organization = Organization.find(params[:id])
	  organization.increment!(:upvotes)
end

  private

  def organization_params
    params.require(:organization).permit(:id, :name, :description, :address, :donations, :volunteers, :user_id, :category_id)
  end


end
