import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Typed from 'react-typed';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="flex items-center justify-between p-8 bg-gray-100">
            <div className="w-1/2">
                <Typography variant="h2" component="h1" className="mb-4">
                    Welcome to Crop Connect
                </Typography>
                <Typed
                    strings={[
                        'Connecting Farmers and Consumers',
                        'Empowering Agriculture',
                        'Bridging the Gap'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    className="text-2xl text-gray-700"
                />
                <Typography variant="body1" className="my-4">
                    Discover our platform that connects farmers directly with consumers, ensuring fresh produce and fair prices.
                </Typography>
                <div className="space-x-4">
                    <Button variant="contained" color="primary" onClick={() => navigate('/about')}>
                        Know More About Us
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => navigate('/login')}>
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="w-1/2">
                <img src="path/to/your/image.gif" alt="Crop Connect" className="w-full h-auto" />
            </div>
        </section>
    );
};

export default HeroSection;