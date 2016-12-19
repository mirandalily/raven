class CommentSerializer < ActiveModel::Serializer

  attributes :id, :body

  belongs_to :organization
  belongs_to :user

end
