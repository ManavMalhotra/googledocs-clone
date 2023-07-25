import TextEditor from "./TextEditor";
import logo from "../assets/images/logo_2.png";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <div className="navbar-brand-logo">
            <a href="/">
              <img className="navbar-brand-logo" src={logo} />
            </a>
          </div>
          <div className="navbar-item">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
      <TextEditor />
    </div>
  );
};

export default Home;
