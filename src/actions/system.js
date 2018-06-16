export const SYSTEM_MOCK_BACKEND = 'SYSTEM_MOCK_BACKEND'
export function mockBackend(enable) {
  return {
    type: SYSTEM_MOCK_BACKEND,
    enable
  }
}