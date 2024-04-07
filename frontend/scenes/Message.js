import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { GiftedChat } from 'react-native-gifted-chat';

const Message = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    const users = [
        { _id: 1, name: 'User 1' },
        { _id: 2, name: 'User 2' },
    ];

    useEffect(() => {
        // initial messages
        setMessages([
            {
                _id: 1,
                text: 'Hello',
                createdAt: new Date(),
                user: users[0], 
            },
        ])
    }, []);

    const onSend = useCallback((messages = []) => {
        // Append the new message to the existing messages
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true} // Show avatars idk how to set
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.uid,
                name: auth?.currentUser?.displayName,
            }}
        />
    );
}

export default Message;
