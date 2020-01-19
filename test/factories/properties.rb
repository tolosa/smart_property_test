FactoryBot.define do
  factory :property do
    name { Faker::Company.name }
    description { Faker::Company.catch_phrase }
    address { Faker::Address.address }
  end
end
