class OrganizationSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :address, :volunteers

end
