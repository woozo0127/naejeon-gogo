import { Check } from 'lucide-react';
import { checkboxStyle } from './checkbox.css';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function Checkbox({ checked, onChange, disabled }: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      className={checkboxStyle({ checked })}
      onClick={() => onChange(!checked)}
    >
      {checked && <Check size={14} color="#FFFFFF" />}
    </button>
  );
}
