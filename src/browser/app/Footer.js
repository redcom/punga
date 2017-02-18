// @flow
import React from 'react';
import { Box, Text } from '../../common/components';
import { FormattedMessage, defineMessages } from 'react-intl';
import linksMessages from '../../common/app/linksMessages';
import { Link } from '../components';


const messages = defineMessages({
  copyright: {
    defaultMessage: 'Copyright',
    id: 'footer.copyright',
  },
  helpFAQ: {
    defaultMessage: 'Help & Support',
    id: 'footer.helpFAQ',
  },
  helpShippingAndDelivery: {
    defaultMessage: 'Shipping & Delivery',
    id: 'footer.helpShippingAndDelivery',
  },
  helpReturnPolicy: {
    defaultMessage: 'Return and Exchange Policy',
    id: 'footer.helpReturnPolicy',
  },
  helpPayment: {
    defaultMessage: 'Payment and Pricing',
    id: 'footer.helpPayment',
  },
  contactByEmail: {
    defaultMessage: "Contact us ny email",
    id: 'footer.contactByEmail',
  },
  contactPinterest: {
    defaultMessage: 'Pinterest',
    id: 'footer.contactPinterest',
  },
});


const Footer = () => (
  <Box
    flex={1}
    alignSelf='stretch'
    flexDirection="row"
    borderTopWidth={1}
    borderStyle="solid"
  >
    <Box
      flexDirection="column"
      paddingVertical={1}
      minWidth="25%"
    >
      <Text size={1} bold="true">
        <FormattedMessage {...linksMessages.ourStory} />
      </Text>
      {'\u00a0'}
      <Link size={-1} to="/copyright">
        <FormattedMessage {...messages.copyright} />
      </Link>
    </Box>

    <Box
      flexDirection="column"
      flexGrow={1}
      paddingVertical={1}
      minWidth="25%"
    >
      <Text size={1} bold="true">
        <FormattedMessage {...linksMessages.helpNav} />
      </Text>
      {'\u00a0'}
      <Link size={-1} to="/help-faq">
        <FormattedMessage {...messages.helpFAQ} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/help-shipping">
        <FormattedMessage {...messages.helpShippingAndDelivery} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/help-helpReturnPolicy">
        <FormattedMessage {...messages.helpReturnPolicy} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/help-payment">
        <FormattedMessage {...messages.helpPayment} />
      </Link>
    </Box>

    <Box
      flexDirection="column"
      flexGrow={1}
      paddingVertical={1}
      minWidth="25%"
    >
      <Text size={1} bold="true">
        <FormattedMessage {...linksMessages.customOrder} />
      </Text>
      {'\u00a0'}
      <Link size={-1} to="/help-faq">
        <FormattedMessage {...messages.helpFAQ} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/help-shipping">
        <FormattedMessage {...messages.helpShippingAndDelivery} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/help-helpReturnPolicy">
        <FormattedMessage {...messages.helpReturnPolicy} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/help-payment">
        <FormattedMessage {...messages.helpPayment} />
      </Link>
    </Box>

    <Box
      flexDirection="column"
      paddingVertical={1}
      minWidth="25%"
    >
      <Text size={1} bold="true">
        <FormattedMessage {...linksMessages.contact} />
      </Text>
      {'\u00a0'}
      <Link size={-1} to="/contact">
        <FormattedMessage {...messages.contactByEmail} />
      </Link>
      {'\u00a0'}
      <Link size={-1} to="/contact-pinterest">
        <FormattedMessage {...messages.contactPinterest} />
      </Link>
    </Box>
  </Box>
);

export default Footer;
