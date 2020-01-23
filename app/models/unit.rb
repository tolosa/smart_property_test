class Unit < ApplicationRecord
  belongs_to :property

  validates :number, :area, :property, presence: true
  validates :number, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  ransacker :number do
    Arel.sql('number::text')
  end
end
