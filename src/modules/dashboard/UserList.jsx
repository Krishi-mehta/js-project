import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      {/* <h2>User List</h2> */}
      <ul>
      {users?.length > 0 && users.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Mobile:</strong> {user.mobile}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
