// @flow
import type { State } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, Loading, PageHeader } from '../../common/components';
import { Title } from '../components';
import { compose } from 'ramda';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactFormError from './ContactFormError';
import ContactFormSent from './ContactFormSent';

type ContactPageProps = {
  intl: $IntlShape,
  disabled: boolean,
  formIsSent: boolean,
};

const ContactPage = ({
  intl,
  disabled,
  formIsSent,
}: ContactPageProps) => (
      <Box>
        <Title message={linksMessages.contact} />
        <PageHeader heading={intl.formatMessage(linksMessages.contact)} />
        {!formIsSent &&
          <ContactForm />
        }
        {formIsSent &&
          <ContactFormSent />
        }
        <ContactFormError />
        {disabled &&
          <Loading marginVertical={1} />
        }
      </Box>
  );

export default compose(
  connect(
    (state: State) => ({
      disabled: state.contact.formDisabled,
      formIsSent: state.contact.formIsSent,
    }),
  ),
  injectIntl,
)(ContactPage);
