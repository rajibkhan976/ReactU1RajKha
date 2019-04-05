import React, { Component, Fragment } from 'react';
import styles from './WrapperComponentCSS.module.css';

class WrapperComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {showLeftContent: true, showRightContent: true};
  }

  toggleLeftContent = (e) => {
    this.setState({showLeftContent: !this.state.showLeftContent});
  }

  toggleRightContent = (e) => {
    this.setState({showRightContent: !this.state.showRightContent});
  }

   render () {
       return (
         <Fragment>
          <div className={styles.cardOne}>
            {this.state.showLeftContent ? this.props.left : null}
            <hr/> <br/>
            <button type="button" className="btn btn-info" onClick={this.toggleLeftContent}>Show Content</button>
          </div>
          <div className={styles.cardTwo}>
            {this.state.showRightContent ? this.props.right : null}
            <hr/> <br/>
            <button type="button" className="btn btn-info" onClick={this.toggleRightContent}>Show Content</button>
          </div>
         </Fragment>
       );
     }
   }

export default WrapperComponent;
