class OrganizationsController < ApplicationController

  # before_filter :authenicate_user!, only: [:create, :update, :destroy]

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

  private

  def organization_params
    params.require(:organization).permit(:name, :description, :address)
  end

end
