import React from 'react';
import { BaseTimePickerStyled } from './BaseTimePicker.styled';
import moment from 'moment';
import { constants } from 'utils';

type BaseTimePickerProps = {
  value?: string;
  onChange?: (val: string) => void;
};
const BaseTimePicker = ({ value, onChange, ...props }: BaseTimePickerProps) => {
  return (
    <BaseTimePickerStyled
      bordered={false}
      use12Hours
      format={constants.TIME_FORMAT}
      {...props}
      defaultValue={moment(value, constants.TIME_FORMAT)}
      onChange={(value: moment.Moment | null) => {
        // eslint-disable-next-line react/prop-types
        onChange?.(value?.format(constants.TIME_FORMAT).toString() ?? '');
      }}
      suffixIcon={<div>afd</div>}
      clearIcon={false}
    ></BaseTimePickerStyled>
  );
};

export default BaseTimePicker;
