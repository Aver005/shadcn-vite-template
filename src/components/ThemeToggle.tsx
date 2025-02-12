interface ThemeToggleProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className='absolute top-4 right-4 p-2 bg-accent text-accent-foreground rounded-full shadow-md'
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
