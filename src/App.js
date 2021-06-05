import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height='100vh'
            projectID = '21708a29-5f78-4d5c-93ea-69c838b080bb'
            userName= {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App