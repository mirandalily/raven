class OrganizationSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :donations, :address, :volunteers

end
