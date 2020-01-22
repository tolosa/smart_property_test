import { createSelector } from 'reselect'

const selectProperties = state => state.properties

export const selectLoading = createSelector(
  [selectProperties],
  properties => properties.loading
)

export const selectErrorMessage = createSelector(
  [selectProperties],
  properties => properties.errorMessage
)

export const selectAllProperties = createSelector(
  [selectProperties],
  properties => properties.properties
)
