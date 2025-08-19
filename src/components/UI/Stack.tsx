import type { ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  pos?: string; // 'center' ? 'center' : `flex-${pos}`,
  style?: React.CSSProperties;
}

const Stack = ({ children }: StackProps) => (
  <div className='stack'>{children}</div>
);

export { Stack };
