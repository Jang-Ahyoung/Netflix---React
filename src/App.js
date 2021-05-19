import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/Screen/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Screen/Login';
import { auth } from './service/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/Screen/ProfileScreen';

function App() {
  // const user = null;
  const user = useSelector(selectUser); // 이렇게 하먄 give me the user back!!
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth => {
      if (userAuth) {
        //Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //Logged Out
        dispatch(logout()); // 안에 함수로 전달해주어야해!
      }
    }));

    return unsubscribe;
    // return () => {unsubscribe();}
  }, [dispatch]); // 마운트 됐을때 실행되게 됩니다. -> dispatch 변경됐을때로 !
  return (
    <div className="App">
      <Router>
        {user
          ?
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route path="/profile" component={ProfileScreen}></Route>
          </Switch>
          : <Login />
        }
      </Router>
    </div>
  );
}

export default App;
