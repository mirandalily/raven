class OrganizationSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :donations, :address, :volunteers, :upvotes

  has_one :category
  belongs_to :user
  has_many :comments

end
