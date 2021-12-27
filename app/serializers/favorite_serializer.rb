class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :name, :id
  has_one :user
end
