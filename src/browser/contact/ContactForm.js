// @flow
import type { State } from '../../common/types';
import React from 'react';
import buttonsMessages from '../../common/app/buttonsMessages';
import { FormattedMessage, injectIntl } from 'react-intl';

import { compose } from 'ramda';
import { connect } from 'react-redux';
import { fields } from '../../common/lib/redux-fields';
import { sendContactMessage } from '../../common/contact/actions';
import { Form, focus } from '../components';
import {
  Box,
  OutlineButton,
  Field,
  FieldTextarea,
} from '../../common/components';

type ContactFormProps = {
  sendContactMessage: typeof sendContactMessage,
  disabled: boolean,
  fields: any,
  intl: $IntlShape,
};

const Button = ({ message, ...props }) => (
  <FormattedMessage {...message}>
    {(msg) => (
      <OutlineButton marginHorizontal={0.25} {...props}>
        {msg}
      </OutlineButton>
    )}
  </FormattedMessage>
);

const Buttons = (props) => (
  <Box
    flexDirection="row"
    flexWrap="wrap"
    marginVertical={1}
    marginHorizontal={-0.25}
    {...props}
  />
);

class ContactForm extends React.Component {

  onFormSubmit = () => {
    const { fields, sendContactMessage } = this.props;
    sendContactMessage(fields.$values());
    fields.$reset();
  };

  props: ContactFormProps;

  render() {
    const { disabled, fields } = this.props;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Box marginTop={1}>
          <Field
            {...fields.email}
            label="Email"
            disabled={disabled}
            maxLength={100}
            placeholder="example@email.com"
            // That's how we can show field error.
          />
          <FieldTextarea
            {...fields.message}
            disabled={disabled}
            label="Description"
            maxLength={500}
            rows={5}
            placeholder="Some short description"
          />
        </Box>
         <Box>
              <Buttons>
                <Button
                  disabled={disabled}
                  message={buttonsMessages.submit}
                  onClick={this.onFormSubmit}
                />
              </Buttons>
         </Box>
      </Form>
    );
  }
}

export default compose(
  connect(
    (state: State) => ({
      disabled: state.contact.formDisabled,
      error: state.contact.error,
    }),
    { sendContactMessage },
  ),
  injectIntl,
  fields({
    path: ['contact'],
    fields: ['email', 'message'],
    getInitialState: () => ({
      email: '',
      message: '',
    }),
  }),
  focus('error'),
)(ContactForm);

