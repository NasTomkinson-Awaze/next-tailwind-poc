interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge = ({ text, className }: BadgeProps) => {
  return <div className={`badge ${className}`}> {text} </div>;
};
