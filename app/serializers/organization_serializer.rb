class OrganizationSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :id, :name, :description, :address, :volunteers
=======
  attributes :id, :name, :description, :address, :donations, :volunteers

  belongs_to :category
  belongs_to :user
  
>>>>>>> ea81778e65c0dc3ba9d990556e37b12b6fa4125e
end
