import React, { useContext } from 'react';

import UserContext from '../context/user/UserContext';

const Profile = () => {

  const { selectedUser } = useContext(UserContext)

  return (
    <>
      { selectedUser ? (
      <div className="card card-body text-denter">
        <img src={ selectedUser.avatar } className="card-img-top rounded-circle m-auto img-fluid" alt={selectedUser.first_name} style={{ width: 180 }} />
        <h3>
          {`${ selectedUser.first_name } ${ selectedUser.last_name }`}
        </h3>
        <h5>
          Email: {`${ selectedUser.email }`}
        </h5>
      </div>
      ) : (<h1>No user selected</h1>) }
    </>
  );
}

export default Profile;
