import React from 'react';

export default class FormInput extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="form-control">
        <label>
          <input
            className={value ? 'active' : null}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
          <span className="label-text">First Name</span>
          <span className="focus-border">
            <i />
          </span>
        </label>

        <style jsx>{`
          .form-control {
            position: relative;
            margin: 2em 0;

            input {
              /*font: 15px/24px 'Lato', Arial, sans-serif;*/
              font-size: 1em;
              line-height: 1.6em;
              box-sizing: border-box;
              color: #fff;
              width: 100%;
              letter-spacing: 1px;
              border: 1px solid #fff;
              padding: 0.5em 1em;
              transition: 0.4s;
              background: transparent;

              &:focus,
              &.active {
                outline: none;

                & ~ .focus-border {
                  &:before,
                  &:after {
                    width: 100%;
                    transition: 0.3s;
                  }

                  i:before,
                  i:after {
                    height: 100%;
                    transition: 0.4s;
                  }
                }

                & ~ .label-text {
                  top: -1.5em;
                  left: 0;
                  font-size: 0.8em;
                  color: #02fefe;
                  transition: 0.3s;
                }
              }
            }

            .focus-border {
              &:before,
              &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: #02fefe;
                transition: 0.3s;
              }

              &:after {
                top: auto;
                bottom: 0;
                left: auto;
                right: 0;
              }

              i:before,
              i:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 2px;
                height: 0;
                background-color: #02fefe;
                transition: 0.4s;
              }

              i:after {
                left: auto;
                right: 0;
                top: auto;
                bottom: 0;
              }
            }

            .label-text {
              position: absolute;
              left: 1em;
              top: 0.75em;
              font-size: 1em;
              width: 100%;
              color: #aaa;
              transition: 0.3s;
              letter-spacing: 0.5px;
              z-index: -1;
            }
          }
        `}</style>
      </div>
    );
  }
}
