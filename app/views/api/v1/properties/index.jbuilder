json.array! @properties.each do |property|
  json.partial! 'property', property: property
end