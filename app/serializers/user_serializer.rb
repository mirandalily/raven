class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :organizations, foreign_key 'user_id'
end
