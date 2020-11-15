export function findActiveHandle(state, route) {
  return state.handles.find((it) => it.name === route.match.params.serviceName);
}
