require_relative '../../_pattern.rb'

class Api::V1::UnitPattern < Pattern
  def initialize(unit = nil)
    if unit
      @unit = unit
      @pattern = pattern_template(unit)
    end

    self
  end

  def list(units)
    @pattern = []

    units.each do |unit|
      @pattern << pattern_template(unit)
    end

    self
  end

  def pattern_template(unit)
    {
      id: wildcard_matcher,
      number: unit.number,
      area: unit.area
    }
  end
end
