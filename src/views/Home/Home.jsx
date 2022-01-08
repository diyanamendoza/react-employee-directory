import { Link, Redirect } from 'react-router-dom';
import styles from '../../App.css'
import { useAuth } from '../../context/AuthContext';

export default function Home() {
  const auth = useAuth()
  if(auth.user) return <Redirect to='/profile' />

  return (
    <section className={styles.home}>
      <h1>Employee Directory</h1>
      <p>Please <Link to='/login'>sign in</Link> to access the employee directory. New here? <Link to='/register'>Create your account</Link>.</p>
    </section>
  );
}
