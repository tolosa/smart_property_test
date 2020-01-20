class Property < ApplicationRecord
  has_many :units, dependent: :destroy

  validates :name, :address, presence: true

  default_scope { where(archived: false) }
  scope :archived, -> { unscoped.where(archived: true) }
end
