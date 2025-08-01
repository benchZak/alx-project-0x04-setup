import { ReactNode } from 'react';

// Button component props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Layout component props
export interface LayoutProps {
  children: ReactNode;
}

// Page routing props
export interface PageRouteProps {
  pageRoute: string;
}
