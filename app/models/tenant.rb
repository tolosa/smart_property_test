class Tenant < ApplicationRecord
  has_secure_password(validations: false)

  has_one :api_key, dependent: :destroy
end
