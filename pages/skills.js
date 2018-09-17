import React from 'react';

const SKILLS = [
  { name: 'Javascript', progress: '90%' },
  { name: 'Typescript', progress: '75%' },
  { name: 'React.js', progress: '100%' },
  { name: 'Node.js', progress: '85%' },
  { name: 'Next.js', progress: '100%' },
  { name: 'GraphQL', progress: '100%' },
  { name: 'Apollo GraphQL', progress: '90%' },
  { name: 'MongoDB - Mongoose', progress: '95%' }
];

export default class Skils extends React.Component {
  state = {
    widths: false
  };

  componentDidMount() {
    // Delay setState until the end of the current execution queue
    setTimeout(() => {
      this.setState({ widths: true });
    }, 1);
  }

  render() {
    const { widths } = this.state;

    return (
      <div>
        <p>
          Your greatness is not measured by how much you’re able to gain in
          life, but by how much you’re able to give.
        </p>

        {SKILLS.map(({ name, progress }) => (
          <div key={name} className="skill-bar">
            <div className="title">{name}</div>
            <div className="bar">
              <span style={{ width: widths ? progress : '7%' }}>
                {progress}
              </span>
            </div>
          </div>
        ))}

        <style jsx>{`
          p {
            color: white;
            font-size: 1.2em;
            margin: 0 0 2em;
          }

          .skill-bar {
            display: flex;
            border: 1px solid white;
            border-radius: 5px 0 0 5px;
            margin: 1em 0;

            .title {
              color: white;
              padding: 0.3em;
              width: 12em;
            }

            .bar {
              flex-grow: 1;
              text-align: right;

              span {
                box-sizing: border-box;
                display: block;
                color: black;
                background: white;
                padding: 0.3em;
                transition: width 1s;
              }
            }
          }
        `}</style>
      </div>
    );
  }
}
