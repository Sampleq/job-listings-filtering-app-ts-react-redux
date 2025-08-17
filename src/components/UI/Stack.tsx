import type { ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  pos?: string; // 'center' ? 'center' : `flex-${pos}`,
  style?: React.CSSProperties;
}

const Stack = ({ children, pos, style }: StackProps) => (
  <div
    className='stack'
    style={{
      ...style,
      justifyContent: pos === 'center' ? `flex-${pos}` : 'center',
    }}
  >
    {children}
  </div>
);

export { Stack };
