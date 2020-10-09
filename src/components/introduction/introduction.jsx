import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="face.jpg" size={150}/>
            <p className="introduction-text">
              I love dogs, lakes, and Tevas.
              Volunteer trail cutter. 
              Maker from Texas.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
