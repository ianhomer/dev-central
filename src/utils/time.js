export function toHoursAsString(seconds) {
  return seconds ? Math.ceil(seconds / 3600) : ""
}