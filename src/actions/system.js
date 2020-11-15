export const SYSTEM_MOCK_BACKEND = "SYSTEM_MOCK_BACKEND";
export function mockBackend(flush, enable) {
  return {
    type: SYSTEM_MOCK_BACKEND,
    enable,
    flush,
  };
}

export const SYSTEM_FLUSH_DATA = "SYSTEM_FLUSH_DATA";
export function flushData() {
  return {
    type: SYSTEM_FLUSH_DATA,
  };
}
