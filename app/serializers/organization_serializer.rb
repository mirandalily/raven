class OrganizationSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :donations, :address, :volunteers

  belongs_to :category
  belongs_to :user

end
