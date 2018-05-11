import * as React from 'react';
import { CSSModule } from '../index';

export type CustomInputType =
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox';

export type CustomInputProps<T = {}> = React.InputHTMLAttributes<HTMLInputElement> & {
  type: CustomInputType;
  label?: string;
  inline?: boolean;
  bsSize?: 'lg' | 'sm';
  valid?: boolean;
  invalid?: boolean;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CustomInput<T> extends React.Component<CustomInputProps<T>> {}
export default CustomInput;
