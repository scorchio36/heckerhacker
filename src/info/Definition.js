import React, {Component} from 'react';
import './Definition.css';

/* Info pages will have a section called "Vocab". These are just terms that I think
are important and relevant to the topic at hand. They will have a standard form of a
'term' and it's following 'definition'. This component returns this format wrapped in a
list item. Therefore, Definition component should be wrapped in a ul tag when used.*/

class Definition extends Component {


  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      style: { visibility: "hidden", display: "none" }
    };

    this.toggleDetailsVisibility = this.toggleDetailsVisibility.bind(this);
    this.renderDetailsButton = this.renderDetailsButton.bind(this);
  }

  render() {

    return (

      <div>
        <li>
          <h3>{this.props.term}</h3>
          {this.renderDetailsButton()}
            <div className="relevant_links" style={this.state.style}>
              <ul>
                {
                  this.props.links.map(links=> {
                    return (
                      <div>
                        <li key={links.link}><a href={links.link}>{links.title}</a></li>
                      </div>
                    );
                  })
                }
              </ul>
            </div>
          <p>{this.props.definition}</p>
        </li>
      </div>
    );
  }


  toggleDetailsVisibility() {

    if(this.state.isVisible) {
      this.setState({
        isVisible: false,
        style: { visibility: "hidden", display: "none" }
      });
    }
    else {
      this.setState({
        isVisible: true,
        style: { visibility: "visible", display: "inline" }
      });
    }

  }


  // if there are no extra info links for the vocab word, then don't show the button
  renderDetailsButton() {
    if (this.props.links.length>0)
      return (<button id="details_arrow" onClick={this.toggleDetailsVisibility} style={ {title: "click on this to show some cool links!"}}>&#8690;</button>);
  }
}




export default Definition;
