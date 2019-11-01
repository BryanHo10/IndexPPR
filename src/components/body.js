import React from "react"
import {withPrefix} from "gatsby"
import * as $ from "jquery" 
import { element } from "prop-types";
import RepoView from "./Repositories/repo-view"
import access_token from  "../data/github-ppr.json"

class BodyView extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);

    this.state={
      uri:"img/" + this.props.image,
      token: access_token["token"],
      repoData: null,

    };
  }
  componentDidMount() {

      $.get(`https://api.github.com/orgs/${"ilxl-ppr"}/repos?access_token=${this.state.token}`).done(function(data) {
      this.setState({repoData: data});
    }.bind(this));

  }
  render() {
      
    console.log(this.state.repoData);
    if(this.state.repoData){
        console.log(this.state.repoData);
        return (
        <div id="jumbo-container">
            {this.state.repoData.map((elem)=>{
                return (
                <RepoView 
                    key={elem.id}
                    created_at= {elem.created_at}
                    gitUrl = {elem.clone_url}
                    language= {elem.language}
                    name=  {elem.name}
                />);
            })}
        </div>
        );
    }
    else{
        this.retrieveGithubRepo("ilxl-ppr");
        return (
            <div id="jumbo-container">
            </div>
            );
    }
  }
  retrieveGithubRepo(organization){
    $.get(`https://api.github.com/orgs/${"ilxl-ppr"}/repos?access_token=${this.state.token}`).done(function(data) {
      this.setState({repoData: data});
    }.bind(this));
  }
}
export default BodyView;
