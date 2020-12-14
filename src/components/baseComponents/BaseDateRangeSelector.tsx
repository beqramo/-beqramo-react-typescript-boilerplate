import React from 'react';
import { BaseDateRangeSelectorStyled } from './BaseDateRangeSelector.styled';
import moment from 'moment';

type BaseDateRangeSelectorProps = any;
const BaseDateRangeSelector = ({
  d,
}: BaseDateRangeSelectorProps): React.ReactElement => {
  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  return (
    <BaseDateRangeSelectorStyled
      bordered={false}
      ranges={{
        Today: [moment(), moment()],
        'last 7 days': [moment().subtract(7, 'days'), moment()],
        'last 30 days': [moment().subtract(1, 'month'), moment()],
        yesterday: [moment().subtract(1, 'day'), moment()],
        YTD: [moment().subtract(2, 'month'), moment()],
      }}
      size={'large'}
      onChange={onChange}
      suffixIcon={<></>}
      separator={null}
      clearIcon={null}
    />
  );
};

export default BaseDateRangeSelector;
