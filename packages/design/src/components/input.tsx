import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import * as s from './input.css';

type BaseInputProps = {
  label?: string;
};

type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  BaseInputProps & {
    variant?: 'text' | 'search';
  };

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> &
  BaseInputProps & {
    variant: 'select';
    options: { value: string; label: string }[];
  };

type InputProps = TextInputProps | SelectInputProps;

export function Input(props: InputProps) {
  const { variant = 'text', label } = props;

  return (
    <div className={s.inputWrapper}>
      {label && <label className={s.inputLabel}>{label}</label>}
      <div className={s.inputField}>
        {variant === 'search' && <Search size={16} className={s.iconStyle} />}
        {variant === 'select' ? (
          <SelectInput {...(props as SelectInputProps)} />
        ) : (
          <TextInput {...(props as TextInputProps)} />
        )}
      </div>
    </div>
  );
}

function TextInput({ variant: _, label: __, ...rest }: TextInputProps) {
  return <input className={s.inputNative} {...rest} />;
}

function SelectInput({ variant: _, label: __, options, ...rest }: SelectInputProps) {
  return (
    <>
      <select className={s.selectNative} {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className={s.iconStyle} />
    </>
  );
}
