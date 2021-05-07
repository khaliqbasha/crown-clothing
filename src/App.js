import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
         });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
