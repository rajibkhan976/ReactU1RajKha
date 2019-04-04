import React, { Component } from 'react';

class WrapperComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {showContent: true};
  }
  toggleShowContent = (e) => {
    this.setState({showContent: !this.state.showContent});
  }
   render () {
     return (
       <div className="wrapper">
          <button type="button" className="btn btn-primary content-button" onClick={this.toggleShowContent}>Show Content</button>
       </div>
     );
   }
}

export default WrapperComponent;
