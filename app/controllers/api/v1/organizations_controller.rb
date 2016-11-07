module Api
  module V1
    class OrganizationsController < ApplicationController

      def index
        @organizations = Organization.all
        render json: @organizations
      end

      def show
        @organization = set_organization
        render json: @organization
      end

      def create
        @organization = Organization.new(organization_params)
        if @organization.save
          respond_to do |format|
            format.json { render json: @recipe }
          end
        end
      end

      def updated
        @organization = set_organization
        if @organization.update(organization_params)
          respond_to do |format|
            format.json { render json: @recipe }
          end
        end
      end

      def destroy
        @organization = set_organization
        @organization.destroy
      end


      private

      def set_organization
        Organization.find(params[:id])
      end

      def organization_params
        params.require(:organization).permit(:name, :description, :address, :volunteers)
      end

    end
  end
end
