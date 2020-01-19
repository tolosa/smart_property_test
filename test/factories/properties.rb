FactoryBot.define do
  factory :property do
    name { Faker::Company.name }
    description { Faker::Company.catch_phrase }
    address { Faker::Address.street_address }

    trait :with_units do
      after(:create) do |property, evaluator|
        create_list(:unit, Faker::Number.within(range: 1..5), property: property)
      end
    end
  end
end
