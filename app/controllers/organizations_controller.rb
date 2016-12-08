class OrganizationsController < ApplicationController
  before_action :find_organization, except: [:index, :create]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

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
    params.require(:organization).permit(:id, :name, :description, :address, :donations, :volunteers, :user_id)
  end

  def find_organization
  	@organization = Organization.find(params[:id])
  end

end
