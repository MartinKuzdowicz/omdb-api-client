import React, {Component} from 'react';

class MainLayout extends Component {

    render() {
        return (
          <div className="main-layout" >
              {this.props.children}
          </div>
        );
    }
}

export default MainLayout;
