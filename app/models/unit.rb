class Unit < ApplicationRecord
  validates :number, :area, presence: true
  validates :number, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
