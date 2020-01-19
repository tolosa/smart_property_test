FactoryBot.define do
  factory :unit do
    number { Faker::Number.within(range: 1..50) }
    area { Faker::Address.community }
  end
end
