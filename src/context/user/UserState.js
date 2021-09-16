import React, { useReducer } from "react";
import axios from 'axios';

import UserReducer from './UserReducer'
import UserContext from './UserContext';

const UserState = (props) => {

  const initialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)
  
  const getData = async(url) => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error)
    }
  }

  const getUSers = async() => {
    const res = await getData('https://reqres.in/api/users');
    dispatch({
      type: 'GET_USERS',
      payload: res.data.data
    })
  }
  
  const getProfile = async(id) => {
    const res = await getData(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data.data
    })
  }


  return (
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUSers,
      getProfile,
    }}>
      { props.children }
    </UserContext.Provider>
  )

}

export default UserState;