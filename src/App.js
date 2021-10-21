import UserSearchForm from './components/UserSearchForm';
import GetUserData from './components/GetUserData';

function App() {
  return (
    <div className='App'>
      <UserSearchForm />
      <GetUserData user='facebook' />
    </div>
  );
}

export default App;
