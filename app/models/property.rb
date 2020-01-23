class Property < ApplicationRecord
  has_many :units, dependent: :destroy

  validates :name, :address, presence: true

  accepts_nested_attributes_for :units

  default_scope { includes(:units) }

  scope :archived, -> { unscoped.where(archived: true) }
  scope :active, -> { unscoped.where(archived: false) }
end
