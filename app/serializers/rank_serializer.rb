class RankSerializer < ActiveModel::Serializer
  attributes :id, :ref_key, :comment, :rank, :created_at
  has_one :user
end
