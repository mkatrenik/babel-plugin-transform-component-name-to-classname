import React from 'react';

// export class Foo {
//   static propTypes = {

//   };
//   render() {
//     return (
//       <div className="bar">
//         <div>foo</div>
//       </div>
//     );
//   }
// }

// export class Bar {
//   render() {
//     return (
//       <Foo />
//     );
//   }
// }


export default class Button extends Component {
  static propTypes = {
    content: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  render() {
    const name = cx('button', styles[this.props.size], styles[this.props.type]);
    const content = this.props.children || <FormattedMessage id={this.props.content}/>;

    function r() {
      return (
        <span />
      );
    }

    return (
      <button
        disabled={this.props.disabled}
        className="name"
        onClick={this.props.onClick}>
          {content}
          {r()}
      </button>
    );
  }
}
