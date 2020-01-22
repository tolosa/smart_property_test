require_relative '../../_pattern.rb'

class Api::V1::PropertyPattern < Pattern
  def initialize(property = nil)
    if property
      @property = property
      @pattern = pattern_template(property)
    end

    self
  end

  def list(properties)
    @pattern = []

    properties.each do |property|
      @pattern << pattern_template(property)
    end

    self
  end

  def pattern_template(property)
    {
      id: wildcard_matcher,
      name: property.name,
      description: property.description,
      address: property.address,
      units: Api::V1::UnitPattern.new.list(property.units).pattern
    }
  end
end
