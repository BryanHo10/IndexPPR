import React from "react"
import {withPrefix} from "gatsby"
import * as $ from "jquery" 
import { element } from "prop-types";

class BodyView extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);

    this.state={
      uri:"img/" + this.props.image,
      token:"",
      externalData: null,
    };
  }
  componentDidMount() {

      $.get(`https://api.github.com/orgs/${"ilxl-ppr"}/repos?access_token=${this.state.token}`).done(function(data) {
      this.setState({externalData: data});
    }.bind(this));

  }
  render() {
      
    console.log(this.state.externalData);
    if(this.state.externalData){
        console.log(this.state.externalData);
        return (
        <div id="jumbo-container">
            {this.state.externalData.map((elem)=>{
                return (<div key={elem.name}>{elem.name}</div>);
            })}
        </div>
        );
    }
    else{
        return (
            <div id="jumbo-container">
            </div>
            );
    }
  }
  retrieveGithubRepo(organization){
    $.ajax({
        url: `https://api.github.com/orgs/${organization}/repos?access_token=${this.state.token}`,
        data:{

        },
        complete: function( result ) {
            console.log(result.responseJSON);
        }
      });
  }
}
export default BodyView;
