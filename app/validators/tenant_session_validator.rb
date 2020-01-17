class TenantSessionValidator < BaseValidator
  attr_accessor :access_key, :password

  validates :access_key, presence: true
  validates :password, presence: true
end