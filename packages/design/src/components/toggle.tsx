import { toggleTrack, toggleKnob } from './toggle.css';

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function Toggle({ checked, onChange, disabled }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={toggleTrack({ checked })}
      onClick={() => onChange(!checked)}
    >
      <span className={toggleKnob({ checked })} />
    </button>
  );
}
