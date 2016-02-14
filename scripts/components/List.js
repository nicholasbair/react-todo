// List screen

import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class List extends React.Component {
  goToList(event) {
    event.preventDefault();
    // pull data from input
    let listId = this.refs.listId.value;
    this.history.pushState(null, '/list/' + listId);
  }

  render() {
    return (
      <form onSubmit={this.goToList}>
        <h2>Please name your list</h2>
        <input type="text" ref="listId" defaultValue={h.getFunName()} required/>
        <input type="Submit"/>
      </form>
    );
  }
}

reactMixin.onClass(List, History);

export default List;
