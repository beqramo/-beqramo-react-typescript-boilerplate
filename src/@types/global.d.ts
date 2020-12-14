// declare module 'react-treebeard';

declare module '*.ttf';
declare module '*.woff';

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type FormSectionWrapperType = {
  id: number;
  title: string;
  description?: string;
  bottomDescription?: string;
  fields: FormBuilderFieldType[];
};

type FormBuilderFieldType = {
  id: number;
  type:
    | 'Input'
    | 'Radio'
    | 'Select'
    | 'Checkbox'
    | 'TextArea'
    | 'Copyable'
    | 'BadgeShape'
    | 'BadgeColors'
    | 'InputTitle'
    | 'DatePicker'
    | 'TimePicker'
    | 'InputURL'
    | 'BadgeColors'
    | 'SelectWithInput'
    | 'Password';
  name: string;
  value?: string | null | boolean;
  checked?: boolean;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  customType?: 'twoInputInRow' | 'twoField2/5';
  itemsArray?: SelectItemType[];
};

type SelectItemType = {
  label: string;
  value: string;
  tooltipText?: string;
};

type SvgGlobalType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

type HTagtype = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
