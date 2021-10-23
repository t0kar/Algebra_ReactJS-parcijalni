import PropTypes from 'prop-types';

export default function UserSearchForm({ getUser }) {
  const handleOnSubmit = (event) => {
    const username = event.target.user.value.replace(/ /g, '');
    console.log(username);
    getUser(username);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <div>GitHub username:</div>
          <input type='text' name='user' />
        </label>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

UserSearchForm.propTypes = {
  getUser: PropTypes.string,
};
