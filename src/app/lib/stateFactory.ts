const defaultState = {
  isLoading: false,
  error: '',
}

export const createWrappedState = <T, WS extends object>(
  data: T[],
  wrappedState: WS
) => ({
  data,
  ...defaultState,
  ...(wrappedState as object),
})

export const createState = <T>(data: T[]) => ({
  data,
  ...defaultState,
})
