import React from 'react';
import { BaseDatePickerStyled } from './BaseDatePicker.styled';
import moment from 'moment';
import { constants } from 'utils';

type BaseTimePickerProps = {
  value?: string;
  onChange?: (val: string) => void;
};

const BaseDatePicker = ({ value, onChange, ...props }: BaseTimePickerProps) => {
  return (
    <BaseDatePickerStyled
      bordered={false}
      format={constants.DATE_FORMAT}
      {...props}
      defaultValue={moment(value, constants.DATE_FORMAT)}
      onChange={(value: moment.Moment | null) => {
        // eslint-disable-next-line react/prop-types
        onChange?.(value?.format(constants.DATE_FORMAT).toString() ?? '');
      }}
      suffixIcon={<div>asd</div>}
      clearIcon={false}
    ></BaseDatePickerStyled>
  );
};

export default BaseDatePicker;
