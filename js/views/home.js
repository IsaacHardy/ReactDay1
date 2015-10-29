import React from 'react';

export default React.createClass({

  clickHandler() {
    this.props.onFormClick();
  },

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.clickHandler}>Go to form</button>
      </div>
    );
  }

});
