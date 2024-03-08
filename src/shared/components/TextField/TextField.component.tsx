import { TextField } from '@mui/material';
import { observer } from 'mobx-react';
import { Field } from 'mobx-react-form';
import React from 'react';

type TextFieldCustomParams = {
  field: Field;
  onBlur?: () => void;
  onChange?: () => void;
};

export const TextFieldCustom = observer(({ field, onBlur }: TextFieldCustomParams) => {
  return (
    <>
      <TextField {...field.bind()} variant="outlined" fullWidth={true} onBlur={onBlur} />
      <small style={{ color: 'red' }}>{field.error}</small>
    </>
  );
});
