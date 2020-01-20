require_relative '../../_pattern.rb'

class Api::V1::TenantPattern < Pattern
  def initialize(tenant = nil)
    if tenant
      @tenant = tenant
      @pattern = pattern_template(tenant)
    end

    self
  end

  def pattern_template(tenant)
    {
      id: tenant.id,
      name: tenant.name,
      api_key: tenant.api_key.try(:token)
    }
  end
end
