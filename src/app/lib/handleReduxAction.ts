export default (actions: any, state: any, action: any) =>
  actions[action.type] ? actions[action.type](state, action) : state
