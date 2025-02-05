
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import heroBg from '../assets/images/landing-images/hero-bg-1.jpg';

const HeroSection = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('getStarted');

    const handleButtonClick = (button) => {
        setActiveButton(button);
        if (button === 'getStarted') {
            navigate('/login');
        } else {
            navigate('/about');
        }
    };

    return (
        <section
       
            className="flex items-center justify-start h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="w-1/2 p-8">
                <div className="p-8 rounded-lg shadow-lg" style={{ opacity: 0.75 }}>
                    <Typography variant="h2" component="h1" className="mb-4 text-white text-5xl">
                        Crop Connect
                    </Typography>
                    <Typography variant="body1" className="mb-4 text-white text-2xl">
                        Discover our platform that connects farmers directly with consumers, ensuring fresh produce and fair prices.
                    </Typography>
                    <div className="space-x-4">
                        <Button
                            variant={activeButton === 'getStarted' ? 'contained' : 'outlined'}
                            color="success"
                            onClick={() => handleButtonClick('getStarted')}
                            sx={{ fontSize: '0.875rem', margin: '0.5rem', padding: '0.5rem 1rem' }}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant={activeButton === 'learnMore' ? 'contained' : 'outlined'}
                            color="success"
                            onClick={() => handleButtonClick('learnMore')}
                            sx={{ fontSize: '0.875rem', margin: '0.5rem', padding: '0.5rem 1rem' }}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;