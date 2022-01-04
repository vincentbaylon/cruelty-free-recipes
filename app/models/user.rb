class User < ApplicationRecord
  has_secure_password

  validates :username, :password_digest, :name, :email, presence: :true
  validates :username, :email, uniqueness: :true
  validates :password, length: { minimum: 6 }, on: :create
end
