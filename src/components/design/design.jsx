import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="agile">
          <p className="headline">Working in Tandem</p>
          <p className="text-justify">
            Excellent results can be achieved through agility.
            Therefore I try to empower the agile concept in any aspects of life.
            I believe that brilliant software can only be achieved through constant feedback and an open mind.
            Self-organization of teams triggers creativity.
            <br /> <br />
            Through working experience, I have become an expert on Scrum.
            I have worked with JIRA, Confluence and classic tools like post-its.
          </p>

              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="UX-Consulting"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Photoshop"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Illustrator"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Blender"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              iconStyle={{"fill":"#A80202"}}
              label="Digital Painting"
            />
        </div>

          </div>
        );
    }
}

export default DesignComponent;
