import GithubLogo from '../src/components/GithubLogo';
import TwitterLogo from '../src/components/TwitterLogo';
import LinkedInLogo from '../src/components/LinkedInLogo';

const Home = () => (
  <div>
    <h1>Hi, I'm Luis.</h1>

    <h2>Full-Stack Developer.</h2>
    <h2>Freelancer.</h2>
    <h2>Gamer.</h2>

    <div className="icons">
      <a
        href="https://github.com/lfades"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/luis-fernando-alvarez-david-1a490a158/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInLogo />
      </a>
      <a
        href="https://twitter.com/luis_fades"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterLogo />
      </a>
    </div>

    <style jsx>{`
      h1 {
        color: white;
        font-size: 4em;
        margin: 0;
      }

      h2 {
        color: white;
        font-size: 3em;
        margin: 0.5em 0;
        opacity: 0;
        transform: translateX(-20%);
        animation: showTitles 0.5s forwards;
      }

      h2:nth-child(3) {
        transform: translateX(20%);
        animation-delay: 0.5s;
      }

      h2:nth-child(4) {
        animation-delay: 1s;
      }

      .icons {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-gap: 3em;
        padding-top: 2em;
      }

      @keyframes showTitles {
        0% {
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default Home;
