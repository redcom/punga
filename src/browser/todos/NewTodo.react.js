import './NewTodo.scss';
import * as todosActions from '../../common/todos/actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fields } from '../../common/lib/redux-fields';
import { defineMessages, injectIntl, intlShape } from 'react-intl';

const messages = defineMessages({
  placeholder: {
    defaultMessage: 'What needs to be done?',
    id: 'todos.newTodo.placeholder'
  }
});

class NewTodo extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    intl: intlShape.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputKeyDown(e) {
    if (e.key !== 'Enter') return;
    const { addTodo, fields } = this.props;
    if (!fields.title.value.trim()) return;
    addTodo(fields.title.value);
    fields.$reset();
  }

  render() {
    const { intl, fields } = this.props;
    const placeholder = intl.formatMessage(messages.placeholder);

    return (
      <input
        autoFocus
        className="new-todo"
        maxLength={100}
        onKeyDown={this.onInputKeyDown}
        placeholder={placeholder}
        {...fields.title}
      />
    );
  }

}

NewTodo = fields(NewTodo, {
  path: 'newTodo',
  fields: ['title']
});

NewTodo = injectIntl(NewTodo);

// Sure we can pass only actions.
export default connect(null, todosActions)(NewTodo);
