import { useState, useEffect } from 'react';

export default function GetUserData(props) {
  const [userData, setUserData] = useState(null);
  const [userError, setUserError] = useState(null);

  const [repoData, setRepoData] = useState(null);
  const [repoError, setRepoError] = useState(null);

  const clearState = () => {
    setUserError(null);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user}`)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          setUserError(response);
        }
      })
      .then((json) => setUserData(json))
      .catch((error) => setUserError(error));

    fetch(`https://api.github.com/users/${props.user}/repos`)
      .then((response) => response.json())
      .then((json) => setRepoData(json))
      .catch((error) => setRepoError(error));
  }, [props.user]);

  if (userError !== null || repoError !== null) {
    setTimeout(() => {
      clearState();
    }, 1000);
    return <div>Something went wrong :(</div>;
  }
  if (userData === null || repoData === null) {
    return <div>Loading...</div>;
  }
  if (props.user === null || props.user === '') {
    return <div>Enter username to get data.</div>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt={userData.name} />
      <h2>{userData.name}</h2>
      <div>
        <b>BIO:</b> {userData.bio}
      </div>
      <div>
        <b>LOCATION:</b> {userData.location}
      </div>
      <div>
        <b>REPOSITORIES:</b>
        <div>
          {repoData.map((item) => (
            <div id={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
