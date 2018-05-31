import React, { Component } from 'react'

class NoteCard extends Component {
  render() {
    return (
      <div>
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default NoteCard;