export default function authentication(opts) {
  console.log(JSON.stringify(opts))
  return {
      'loginInfo' : {
        'lastFailedLoginTime' : new Date(+new Date() - 86400000).toISOString(),
        'previousLoginTime' : new Date(+new Date() - 60000).toISOString(),
        'loginCount' : 2,
        'failedLoginCount' : 1
      },
      'session' : {
      'name' : 'JSESSIONID',
      'value' : Math.floor(Math.random() * Math.floor(10000))
    }
  }

}