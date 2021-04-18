import logo from '../../assets/netflix_logo.png';
import user from '../../assets/netflix_user.png';

import './styles.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <img src={logo} />
      </div>
      <div className="header--user">
        <img src={user} />
      </div>
    </header>
  )
}