import RequestActionWrapper from '../RequestActionWrapper'

export const ApiService = RequestActionWrapper.create(
  'https://jsonplaceholder.typicode.com'
)
