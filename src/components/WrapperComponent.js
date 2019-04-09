import React, { Component, Fragment } from 'react';
import styles from './WrapperComponentCSS.module.css';

/* WrapperComponent have two states as showLeftContent and showRightContent along with two methods to control the dispaly of contents
it received from DashboardComponent as props. This class also uses CSSModule for styling the cards*/
class WrapperComponent extends Component {

  constructor (props) {
    super(props);
    //definition of two states
    this.state = {showContentLeft: true, showContentRight: true};
  }
  // method for controlling the display of left div contents
  toggleShowContentLeft = (e) => {
    this.setState({showContentLeft: !this.state.showContentLeft});
  }
  // method for controlling the display of right div contents
  toggleShowContentRight = (e) => {
    this.setState({showContentRight: !this.state.showContentRight});
  }
  //rendering the contents received from DashboardComponent as props and controlling the dispaly based on the state and events
   render () {
       return (
         <Fragment>
          <div className={styles.cardOne}>
            {this.state.showContentLeft ? this.props.left : null}
            <hr/> <br/>
            <button type="button" className="btn btn-info" onClick={this.toggleShowContentLeft}>Show Content</button>
          </div>
          <div className={styles.cardTwo}>
          {this.state.showContentRight ? this.props.children : null}
          <hr/> <br/>
          <button type="button" className="btn btn-info" onClick={this.toggleShowContentRight}>Show Content</button>
          </div>
         </Fragment>
       );
     }
   }

export default WrapperComponent;
