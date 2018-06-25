import React from 'react';
import PropTypes from 'prop-types'
import { toHoursAsString } from '../utils/time'

const IssueTime = ({issue}) => {
  return (
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
)}

IssueTime.propTypes = {
  issue: PropTypes.object.isRequired,
}

export default IssueTime