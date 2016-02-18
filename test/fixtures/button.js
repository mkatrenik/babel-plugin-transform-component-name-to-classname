import React, { Component, PropTypes } from 'react';
import styles from './styles.sass';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';

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

    return (
      <button
        disabled={this.props.disabled}
        className={name}
        onClick={this.props.onClick}>
          {content}
      </button>
    );
  }
}
