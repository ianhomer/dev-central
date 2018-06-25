import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { findActiveHandle } from '../utils/handles'
import { toHoursAsString } from '../utils/time'

class Issue extends React.Component {
  render() {
    const { issue, handle } = this.props
    if (!handle) {
      return (<span>no handle</span>)
    }

    return (
      <div className="container">
        { issue && issue.subtask &&
          <div className="row issue parent">
            <div className="col-sm-4">&nbsp;</div>
            <div className="col-sm-8 summary">
              { issue.parent.summary }
            </div>
          </div>
        }
        { issue &&
          <div className="row issue">
            <div className="col-sm-2">
              { issue.subtask &&
                <a href={handle.url + '/browse/' + issue.root.key } target="_blank"
                    className="parent">
                  { issue.root.key }
                </a>
              }
            </div>
            <div className="col-sm-2">
              <a href={handle.url + '/browse/' + issue.key } target="_blank">{ issue.key }</a>
            </div>
            <div className="col-sm-7 summary">
              { issue.fields.summary }
            </div>
            <div className="col-sm-1 time">
              <table>
                <tbody>
                  <tr>
                    <td>
                      { issue.fields.aggregatetimeestimate > 0 &&
                         <span className="aggregate">{ toHoursAsString(issue.fields
                          .aggregatetimeestimate) }</span>
                      }
                      { !issue.fields.aggregatetimeestimate &&
                          toHoursAsString(issue.fields.timeoriginalestimate) }
                    </td>
                    <td>{ toHoursAsString(issue.fields.timespent) }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    handle : findActiveHandle(state, ownProps),
    id : parseInt(ownProps.id, 10),
    issue : state.jira.issues && state.jira.issues.find(it => parseInt(it.id, 10) === ownProps.id)
  }
}

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue))
