class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :donations, :volunteers

  belongs_to :category
  belongs_to :user
  
end
