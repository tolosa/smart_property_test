FactoryBot.define do
  factory :unit do
    number { Faker::Number.unique.within(range: 1..50) }
    area { Faker::Address.community }
    property
  end
end
