import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src={`${import.meta.env.BASE_URL}/profile-placeholder.jpg`}
          alt="Shanyce(Me)"
          className="profile-img"
        />
      </div>
      <div className="intro-section">
        <h1>Hello, I'm Shanyce Benson</h1>
        <h2>Web Developer | Designer | Problem Solver</h2>
        <p>
          This isn’t just a portfolio, it’s a peek into how I think, build, and
          (sometimes) break things on purpose. I’m a developer with a passion
          for solving problems and sprinkling a bit of fun into every line of
          code. Explore, play, and stay awhile!
        </p>
        <a href={`${import.meta.env.BASE_URL}#/Projects`} className="cta-button">
          View My Work
        </a>
      </div>
    </div>
  );
}

export default Home;
