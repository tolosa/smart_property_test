const getIntersection = (item, unit) => {
  return ((unit.id === item.id) && (unit.number === item.number) && (unit.area === item.area))
}

const noIntersection = (item, units) => {
  return !units.some(unit => getIntersection(item, unit))
}

export const unitsDifference = (prevUnits, actualUnits) => {
  const difference = prevUnits.filter(unit => noIntersection(unit, actualUnits))
  const actualUnitsIds = actualUnits.map(unit => unit.id)

  return difference.filter(unit => !actualUnitsIds.includes(unit.id))
}
