class Property < ApplicationRecord
  validates :name, :address, presence: true

  default_scope { where(archived: false) }
  scope :archived, -> { unscoped.where(archived: true) }
end
