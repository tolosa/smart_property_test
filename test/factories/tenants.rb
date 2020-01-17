FactoryBot.define do
  factory :tenant do
    name { FFaker::Name.first_name }
    access_key { SecureRandom.urlsafe_base64(12) }
    password { FFaker::Internet.password }
    api_key
  end
end
