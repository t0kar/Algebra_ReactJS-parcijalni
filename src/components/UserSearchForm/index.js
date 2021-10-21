import { useState } from 'react';
import GetUserData from '../GetUserData';

export default function UserSearchForm(props) {
  const [inputState, setInputState] = useState(null);

  const handleOnChange = (event) => {
    setInputState(() => event.target.value);
  };
  console.log(inputState);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    GetUserData(inputState);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <div>GitHub username:</div>
          <input type='text' onChange={handleOnChange} />
        </label>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
