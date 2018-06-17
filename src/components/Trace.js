import React from 'react';
import PropTypes from 'prop-types'

class Trace extends React.Component {
  constructor(props) {
      super(props)
      this.state = { hovering : false }
  }

  render() {
    const handleMouseEnter = () => this.setState({hovering : true});
    const handleMouseLeave = () => this.setState({hovering : false})
    return (
      <div>
        <div className="trace-select"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          +
        </div>
        { this.state.hovering &&
          <div className="trace">{ JSON.stringify(this.props.o) }</div>
        }
      </div>
    )
  }
}

Trace.propTypes = {
  o: PropTypes.object.isRequired,
}

export default Trace