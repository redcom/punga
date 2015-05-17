import Buttons from './buttons.react';
import DocumentTitle from 'react-document-title';
import List from '../todos/list.react';
import NewTodo from '../todos/newtodo.react';
import PureComponent from '../components/purecomponent.react';
import React from 'react';
import ToCheck from './tocheck.react';
import immutable from 'immutable';
import {msg} from '../intl/store';

// Leverage webpack require goodness.
require('./todos.styl');

class Todos extends PureComponent {

  render() {
    const newTodo = this.props.todos.get('newTodo');
    const todos = this.props.todos.get('list');

    return (
      <DocumentTitle title={msg('todos.title')}>
        <section className="todos-page">
          <NewTodo todo={newTodo} />
          <List todos={todos} />
          <Buttons clearAllEnabled={todos.size > 0} />
          <ToCheck />
        </section>
      </DocumentTitle>
    );
  }

}

Todos.propTypes = {
  todos: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Todos;
