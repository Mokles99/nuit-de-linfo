import { createContext, useState } from 'react';

const AuthContext = createContext({
  userList: [],
  register: () => {},
  login: () => {},
});

const AuthProvider = (props) => {
  const [userList, setUserList] = useState([]);

  const register = (user) => {
    setUserList([...userList, user]);
  };
  const login = ({ email, password }) => {
    const user = userList.find((user) => user.email === email);
    if (!user) return console.log('Verify Email');
    if (user.password !== password) return console.log('Verify password');
    console.log('Logged in succefully');
  };

  return <AuthContext.Provider value={{ userList, register, login }}>{props.children}</AuthContext.Provider>;
};

export { AuthContext };
export { AuthProvider };