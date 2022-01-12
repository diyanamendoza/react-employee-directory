import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import SignIn from './views/Auth/SignIn'
import Home from './views/Home/Home'
import styles from '../src/App.css'
import SignUp from './views/Auth/SignUp';
import { AuthProvider } from './context/AuthContext';
import EditProfile from './views/Profile/EditProfile';
import CreateProfile from './views/Profile/CreateProfile';
import { ProfileProvider } from './context/ProfileContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ConfirmEmail from './views/Auth/ConfirmEmail';

export default function App() {
  return (
    <AuthProvider>
      <Router>
      <main className={styles.main}>

        <Layout>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/login'>
                <SignIn />
              </Route>
              <Route path='/register'>
                <SignUp />
              </Route>
              <Route path='/confirm-email'>
                <ConfirmEmail />
              </Route>
              <ProfileProvider>
                <PrivateRoute path='/profile'> 
                  <EditProfile />
                </PrivateRoute>
                <PrivateRoute path='/create-profile'> 
                  <CreateProfile />
                </PrivateRoute>
              </ProfileProvider>
            </Switch>
        </Layout>

        </main>
      </Router>
    </AuthProvider>
  );
}
