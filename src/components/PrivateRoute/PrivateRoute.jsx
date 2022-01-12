import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth()

  return (
    <Route
        {...rest}
        render={({ location }) => !user ? 
        <Redirect to={{
            pathname: '/',
            state: { from: location }
         }} /> : children }
    />
    )
}