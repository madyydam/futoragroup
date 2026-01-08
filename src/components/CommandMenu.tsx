import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import {
    Home,
    Briefcase,
    User,
    Mail,
    // Link as LinkIcon, unused
    Book,
    Search,
    CreditCard,
    TrendingUp,
    Users,
    Brain
} from 'lucide-react';
import './CommandMenu.css';

export default function CommandMenu() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            onClick={() => setOpen(false)} // Close if clicking background
        >
            <div className="cmd-wrapper" onClick={(e) => e.stopPropagation()}>
                <Command.Input placeholder="Type a command or search..." />

                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>

                    <Command.Group heading="Navigation">
                        <Command.Item onSelect={() => runCommand(() => navigate('/'))}>
                            <Home className="cmd-icon" />
                            Home
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/companies'))}>
                            <Briefcase className="cmd-icon" />
                            Companies
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/insights'))}>
                            <Book className="cmd-icon" />
                            Insights
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/careers'))}>
                            <User className="cmd-icon" />
                            Founder
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/careers'))}>
                            <Search className="cmd-icon" />
                            Careers
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/contact'))}>
                            <Mail className="cmd-icon" />
                            Contact
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Companies">
                        <Command.Item onSelect={() => runCommand(() => window.open('https://futoralift.vercel.app/', '_blank'))}>
                            <TrendingUp className="cmd-icon" />
                            FutoraLift
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => window.open('https://futorapay.vercel.app/', '_blank'))}>
                            <CreditCard className="cmd-icon" />
                            FutoraPay
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => window.open('https://futoraai.vercel.app/', '_blank'))}>
                            <Brain className="cmd-icon" />
                            Futora AI
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/companies'))}>
                            <Users className="cmd-icon" />
                            FutoraOne
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Actions">
                        <Command.Item onSelect={() => runCommand(() => window.location.href = 'mailto:madhurdhadve@gmail.com')}>
                            <Mail className="cmd-icon" />
                            Email Founder
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
}
