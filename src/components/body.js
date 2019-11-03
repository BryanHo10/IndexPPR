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
  
  render() {
    let bg_color = {
      backgroundColor: '#DAFEE3',
    };
    if(this.state.repoData){
        return (
        <div className = "d-flex justify-content-center py-5" style={bg_color}>
          
          <div className = "body-container border py-5 px-3" style={{backgroundColor:"#FFFFFF"}}>
            <h1>IndexPPR</h1>
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

        </div>
        );
    }
    else{
        this.retrieveGithubRepo("ilxl-ppr");
        return (
            <div className = "d-flex justify-content-center py-5">
              <div className = "body-container border py-5 px-3">
              </div>
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
