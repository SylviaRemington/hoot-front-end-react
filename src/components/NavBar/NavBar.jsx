import { useContext } from 'react';
import { Link } from 'react-router';

import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // FORMER RETURN
  // return (
  //   <nav>
  //     {user ? (
  //       <ul>
  //         <li>Welcome, {user.username}</li>
  //         <li><Link to='/'>Dashboard</Link></li>
  //         <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
  //       </ul>
  //     ) : (
  //       <ul>
  //         <li><Link to='/'>Home</Link></li>
  //         <li><Link to='/sign-in'>Sign In</Link></li>
  //         <li><Link to='/sign-up'>Sign Up</Link></li>
  //       </ul>
  //     )}
  //   </nav>
  // );

  return (
    <nav>
      {user ? (
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/hoots'>HOOTS</Link></li>
          <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
        </ul>
      ) : (
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/sign-in'>SIGN IN</Link></li>
          <li><Link to='/sign-up'>SIGN UP</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;


/*
From HootList.jsx, go to NavBar.jsx (here):
Head over to the NavBar component. We’ll need to add a new link here that allows a signed-in user to navigate to the new HootList component.

Add a link to the new HootList component at /hoots.

Next, let’s remove the welcome message and update the text content of our Dashboard <Link> to HOME.

Finally, uppercase the text content of the remaining links to match the aesthetic we have going on.
*/


