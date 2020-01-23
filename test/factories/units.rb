FactoryBot.define do
  factory :unit do
    number { Faker::Number.unique.within(range: 1..150) }
    area { Faker::Address.community }
    property
  end
end
