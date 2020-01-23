FactoryBot.define do
  factory :property do
    name { Faker::Company.name }
    description { Faker::Company.catch_phrase }
    address { Faker::Address.street_address }
    archived { Faker::Boolean.boolean(true_ratio: 0.25) }

    trait :with_units do
      after(:create) do |property, evaluator|
        create_list(:unit, Faker::Number.within(range: 0..4), property: property)
      end
    end
  end
end
