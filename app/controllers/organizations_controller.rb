class OrganizationsController < ApplicationController

  def index
    organizations = Organization.all
    render json: organizations
  end

  def show
    organization = set_organization
    render json: organization
  end

  def create
    organization = Organization.new(organization_params)
    if organization.save
      render json: organization
    end
  end

  def updated
    organization = set_organization
    if organization.update(organization_params)
      render json: organization
    end
  end

  def destroy
    organization = set_organization
    organization.destroy
  end


  private

  def set_organization
    Organization.find(params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :description, :address, :volunteers)
  end

end
