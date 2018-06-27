export default function mockFields() {
  return [
    {
      "id": "customfield_10017",
      "key": "customfield_10017",
      "name": "Story Points",
      "custom": true,
      "orderable": true,
      "navigable": true,
      "searchable": true,
      "clauseNames": [
        "cf[10017]",
        "Story Points"
      ],
      "schema": {
        "type": "number",
        "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
        "customId": 10017
      }
    },
    {
      "id": "timespent",
      "key": "timespent",
      "name": "Time Spent",
      "custom": false,
      "orderable": false,
      "navigable": true,
      "searchable": false,
      "clauseNames": [
        "timespent"
      ],
      "schema": {
        "type": "number",
        "system": "timespent"
      }
    }
  ]
}