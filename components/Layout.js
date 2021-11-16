import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';

const Layout = ({ children, router }) => (
  <div className="background">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <header>
      <nav>
        <ul>
          <li className="lfades">
            <Link href="/" prefetch>
              <a href="/">lfades</a>
            </Link>
          </li>
          <li>
            <Link href="/skills" prefetch>
              <a
                href="/skills"
                className={`nav-item${
                  router.pathname === '/skills' ? ' active' : ''
                }`}
              >
                Skills
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <div className="content">{children}</div>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat');

      body,
      html {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Montserrat;
      }
    `}</style>

    <style jsx>{`
      .background {
        display: grid;
        position: absolute;
        background: black;
        overflow: auto;
        height: 100%;
        width: 100%;
        grid-template-areas:
          'header'
          'content';
        grid-template-rows: 1fr 4fr;
        z-index: 0;

        header {
          padding: 2em 1em;
        }

        nav > ul {
          list-style: none;
          display: flex;
          padding: 0;
          margin: 0;

          li {
            padding: 0 1em;

            a {
              text-decoration: none;
              padding: 0.2em;
              cursor: pointer;
              color: white;
              font-size: 1.3em;
            }

            .nav-item {
              position: relative;

              &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                left: 0;
                bottom: 0;
                transition: width 0.2s;
                background: #02fefe;
              }

              &:hover::after {
                width: 100%;
              }
            }

            .nav-item.active::after {
              width: 100%;
            }
          }

          .lfades {
            flex-grow: 1;

            a {
              text-decoration: none;
              color: #02fefe;
            }
          }
        }

        .content {
          grid-area: content;
          margin: 0 auto;
          padding: 2em 2em;
        }
      }
    `}</style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Layout);
