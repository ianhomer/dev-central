import mockWorkLogUpdated from '../services/jira/mock/workLogUpdated'

var scope = nock(/atlassian.net/)
  .get('/rest/api/2/worklog/updated')
  .reply(200, function() {
    mockWorkLogUpdated()
  })