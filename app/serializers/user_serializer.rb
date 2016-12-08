class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
<<<<<<< HEAD
=======

  has_many :organizations, foreign_key 'user_id'
>>>>>>> ea81778e65c0dc3ba9d990556e37b12b6fa4125e
end
