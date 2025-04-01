import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface DomlintUiProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function DomlintUi({ children, className, style }: DomlintUiProps) {
  return (
    <DomlintUi className={cn('domlint-ui', className)} style={style}>
      {children}
    </DomlintUi>
  );
}
