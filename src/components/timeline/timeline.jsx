import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Learning experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Front End Developer" subtitle="Sideprjct Accelerator Program"/>
                      <CardText expandable={true}>
                          May	2020 - Current. Full Stack Web Developer Bootcamp.
                          <br/><br/>
                          <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Figma</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Git</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Slack</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Agile</Chip>
                                </div>
</div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Student" subtitle="Practicum"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                        May	2020 - Current. Full Stack Web Developer Bootcamp.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Figma</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Git</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Slack</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Agile</Chip>
                                </div>

                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Student" subtitle="Continuing Education"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                      September 2020 - Present. Reading documentation and using the Tech I'm learning in my side projects.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Docker</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>AWS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Flutter</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Materil UI</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Trello</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Miro</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Android Studio</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Community Manager" subtitle="DevUX Projects"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          September 2020 -	Present. Founded a growing community of UX designers and Front End Developers for the purpose of trying to create a DevOps culture relevant for UX.
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Figma</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Adobe XD</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Zoom</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
