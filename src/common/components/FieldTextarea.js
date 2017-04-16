// @flow
import type { TextareaProps } from './Textarea';
import Box from './Box';
import Textarea from './Textarea';
import React from 'react';
import Text from './Text';

// Custom TextInput with label and error.
type FieldProps = TextareaProps & { label?: string, error?: string, rows: number, cols: number};

const Field = ({
  label,
  error,
  cols,
  rows,
  size = 0,
  ...props }: FieldProps) => (
  <Box>
    {label && <Text bold size={size - 1}>{label}</Text>}
    <Textarea size={size} cols={cols} rows={rows} {...props} />
    <Text bold color="danger" size={size - 1}>
      {error || '\u00A0'/* Because we need to reserve real fontSize height. */}
    </Text>
  </Box>
);

export default Field;
