import React from 'react';
class MiniDelete extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { callback, item } = this.props;
    callback(item);
  }
  render() {
    return (<React.Fragment><button onClick={this.handleClick}>x</button><div>{this.props.item}</div></React.Fragment>);
  }
}
export default MiniDelete;


