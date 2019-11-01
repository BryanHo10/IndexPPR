import React from "react"

/* PROPS : 
		createDate = created_at: "2018-09-07T18:56:54Z"
		gitUrl = clone_url: "https://github.com/ilxl-ppr/restaurant-bill.git"
		id: 147863236
		language: "C++"
		name: "restaurant-bill"

*/

class RepoView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	render(){
		let dateString = new Date(this.props.created_at).toDateString();
		
		let dateValues = dateString.split(' '); // [Wed, Jul, 28, 1993]
		let month = dateValues[1];
		let day = dateValues[2];
		let year = dateValues[3];

		return(
			<div className="container-fluid row py-3">
				<div className="col-lg">
					<h5 id="message-title" className="gotham-med">{month} {day}, {year}</h5>
					<h2 id="message-title" className="gotham-med">{this.props.name}</h2>
					<h6 className="gotham-book pb-4">{this.props.language}</h6>	
					<a download="message" href={this.props.gitUrl}>
						<h6 id="attach-icon" className="gotham-book">  Github Link</h6>
					</a>
				</div>  
			</div>
		);
	}
}

export default RepoView;