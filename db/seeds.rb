ActiveRecord::Base.transaction do
  FactoryBot.create_list(:property, 30, :with_units)
  ApiKey.create(token: 'Rq0Sffmyre4pXxOoynCc5r2GkKZBLL_ZEC49mybX-5VUzSlcRqQgcTAkjzPMOotPO5Z52NcLKJDWN5fCsG944A')
end
