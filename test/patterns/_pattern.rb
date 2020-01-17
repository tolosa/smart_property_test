class Pattern
  delegate :t, :l, to: I18n
  attr_accessor :pattern

  def wildcard_matcher
    ::JsonExpressions::WILDCARD_MATCHER
  end
end
