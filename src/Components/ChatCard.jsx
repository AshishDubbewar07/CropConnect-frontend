import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const ChatCard = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from local storage/session
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);

        // Fetch messages initially
        fetchMessages();

        // Set interval to fetch messages every 5 seconds
        const interval = setInterval(fetchMessages, 5000);
        return () => clearInterval(interval);
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('/api/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async () => {
        try {
            const user = getUser(); // Assuming getUser() is a function that retrieves the user
            if (!user || !user.username) {
                throw new Error('User is not defined or username is missing');
            }
            // Proceed with sending the message
            const response = await sendMessageToServer(user.username, message);
            setMessages([...messages, response.data]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
                Chat
            </Typography>
            <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                {Array.isArray(messages)&&messages.map((msg, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemText
                            primary={msg.user}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {msg.message}
                                    </Typography>
                                    <Typography component="span" variant="caption" color="textSecondary">
                                        {new Date(msg.timestamp).toLocaleString()}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', mt: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={sendMessage} sx={{ ml: 2 }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatCard;