import UserSearchForm from './components/UserSearchForm';
import GetUserData from './components/GetUserData';
import { useState } from 'react';

function App() {
  const [inputState, setInputState] = useState(null);

  const handleOnSubmit = (username) => {
    setInputState(username);
  };

  return (
    <div className='App'>
      <UserSearchForm getUser={handleOnSubmit} />
      <GetUserData user={inputState} />
    </div>
  );
}

export default App;
