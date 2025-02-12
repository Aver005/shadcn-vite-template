import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Heading from '@/components/Heading';
import ThemeToggle from '@/components/ThemeToggle';
import Button from '@/components/Button';
import { User } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import MetaTags from '@/components/MetaTags';

export default function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <div
            className={cn(
                'min-h-screen flex flex-col items-center justify-center',
                'bg-background text-foreground transition-colors duration-300',
            )}
        >
            <MetaTags
                title='MyApp - Modern Web App'
                description='A simple React app with TailwindCSS, ShadCN UI, and dark mode support.'
                url='https://example.com'
                image='og-image.jpg'
            />

            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Heading />
            <div className='mt-8 flex space-x-4'>
                <Button
                    onClick={() =>
                        window.open(
                            'https://github.com/mxpanf/react-vite-shadcn-starter',
                            '_blank',
                        )
                    }
                    className='flex items-center space-x-2'
                >
                    <SiGithub className='w-5 h-5' />
                    <span>Project Repo</span>
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => window.open('https://aaaver.ru', '_blank')}
                    className='flex items-center space-x-2'
                >
                    <User className='w-5 h-5' />
                    <span>Author</span>
                </Button>
            </div>
        </div>
    );
}
