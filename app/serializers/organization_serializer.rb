class OrganizationSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :donations, :address, :volunteers

  has_one :category
  belongs_to :user

end
