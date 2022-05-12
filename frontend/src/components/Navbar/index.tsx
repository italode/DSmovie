import { ReactComponent as Githubicon } from 'assets/img/github.svg';
import './style.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/italode">
            <div className="dsmovie-contact-container">
              <Githubicon />
              <p>/italo Oliveira</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );

}

export default Navbar;