const workLogSeparation = 60000
// zero is the time that IDs start for the mock data
const zero = 1529173500000

export function findWorkLogIdForNow() {
 return  Math.floor((new Date() - zero) / workLogSeparation)
}

export function findUpdatedTimeForId(id) {
  return zero + id * workLogSeparation
}

