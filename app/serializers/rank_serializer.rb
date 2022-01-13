class RankSerializer < ActiveModel::Serializer
  attributes :id, :ref_key, :comment, :rank
  has_one :user
end
