import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export default function Button({
    variant = 'primary',
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                'px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer',
                variant === 'primary'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/80'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                className,
            )}
            {...props}
        />
    );
}
