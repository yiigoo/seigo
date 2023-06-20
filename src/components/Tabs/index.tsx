import { useState } from 'react';
import styles from './index.less';

interface Option {
  label: string;
  value: string;
}
interface IProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (v: string) => void;
}
export default function ({ options = [], defaultValue, onChange }: IProps) {
  const [currentValue, setCurrentValue] = useState(
    defaultValue ? defaultValue : '',
  );
  return (
    <div className={styles.tabs}>
      {options.map(({ label, value }) => (
        <div
          key={value}
          onClick={() => onChange?.(value)}
          className={`${styles.item} ${currentValue === value ? 'active' : ''}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
