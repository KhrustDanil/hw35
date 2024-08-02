import React, { Component } from 'react';
import './NoteList.css';

class NodeList extends Component {
  render() {
   return <div>{this.props.children}</div>;
  }
}

export default NodeList;