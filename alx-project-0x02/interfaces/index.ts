interface CardProps {
  title: string,
  content: string
}
export interface CardProps;

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' |  'rounded-md' | 'rounded-full';
  label: string;
  
}
export interface ButtonProps;

interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface PostProps;
