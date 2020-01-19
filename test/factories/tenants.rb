FactoryBot.define do
  factory :tenant do
    name { Faker::Name.first_name }
    access_key { SecureRandom.urlsafe_base64(12) }
    password { Faker::Internet.password }
    api_key
  end
end
