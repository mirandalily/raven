class OrganizationSerializer < ActiveModel::Serializer
  attributes :name, :description, :address, :volunteers
end
