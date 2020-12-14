import { Row, Select } from 'antd';
import React, { forwardRef, useEffect, useState } from 'react';

import { BaseSelectStyled } from './BaseSelect.styled';
import { Text } from 'components/styles';

import { SelectProps, SelectValue } from 'antd/lib/select';
import { FormPageTypeEnum } from 'utils/enums';

const { Option } = Select;

type BaseSelectProps = SelectProps<any> & {
  label?: string;
  input?: boolean;
  page?: FormPageTypeEnum;
  itemsArray?: {
    label: string;
    value: string;
  }[];
};

// eslint-disable-next-line react/display-name
const BaseSelect = forwardRef(
  (
    { itemsArray, label, input, onChange, page, ...props }: BaseSelectProps,
    ref,
  ): React.ReactElement => {
    const [items, setItems] = useState<typeof itemsArray>(
      input ? [{ label: '', value: '' }, ...(itemsArray ?? [])] : itemsArray,
    );

    const onChangeVal = (value: SelectValue, option: any) => {
      onChange?.(value, option);
    };

    useEffect(() => {
      setItems(
        input ? [{ label: '', value: '' }, ...(itemsArray ?? [])] : itemsArray,
      );
    }, [itemsArray]);

    function onSearch(val: string) {
      console.log('search:', val);

      if (val.length > 2) {
        return;
      }

      const isNum = /^\d+$/.test(val);

      if (isNum) {
        const exists = items?.find(({ value }) => value === val);
        const isLess = val.length < (items?.[0].value.length ?? 0);
        if (isLess && exists) {
          val = '';
        }
        if (items && (!exists || isLess)) {
          items[0] = { label: val, value: val };
          items && setItems([...items]);
        }
      }
    }
    return (
      <Row
        align={'middle'}
        style={{
          flexWrap: 'nowrap',
          marginRight: label ? '1rem' : '0',
          width: '100%',
        }}
        className={'base-selector-row-container'}
      >
        <BaseSelectStyled
          suffixIcon={<div></div>}
          {...props}
          bordered={false}
          $fullWidth={
            page === FormPageTypeEnum.registration ||
            page === FormPageTypeEnum.addCompany ||
            page === FormPageTypeEnum.addUsers
          }
          showSearch={input}
          size={'large'}
          className={'flex flex-center'}
          onChange={onChangeVal}
          onSearch={onSearch}
          ref={ref}
          filterOption={(input, option) => {
            return (
              option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          {items
            ?.filter(({ value }) => value !== '')
            .map(({ value, label }, index) => (
              <Option key={index} value={value}>
                {label}
              </Option>
            ))}
        </BaseSelectStyled>
        {label && (
          <Text color={'#000000'} style={{ paddingLeft: '1rem' }}>
            {label}
          </Text>
        )}
      </Row>
    );
  },
);

export default BaseSelect;
