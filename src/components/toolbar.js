import React from "react"
import {withPrefix, Link} from "gatsby"

// PROPS: isSolid(true/false)
//  isSolid
//      > true:   img(logo_blue.png)  | bg-color(--darkblue)
//      > false:  img(logo_white.png) | bg-color(none)


class Toolbar extends React.Component {
  //Taken from reactstrap "Dropdown" example
  
  render() {

    let bg_color = {
      backgroundColor: '#535252',
    };

    return (
      <div id="toolbar-container" style={bg_color}>
        <div className="container-fluid py-2 px-3">
        <div className="row">
        <div className="col-sm toolbar-links">
          <Link to="/">
            Home
          </Link>
        </div>

        <div className="col-sm">
          <div className="toolbar-links">

          {/* Array  */}
          <Link to="/">
            Array
          </Link>
          {/* Loops  */}
          <Link to="/">
            Loops
          </Link>
          {/* Functions  */}
          <Link to="/">
            Functions
          </Link>
          {/* String  */}
          <Link to="/">
            String
          </Link>
          {/* Array  */}
          <Link to="/">
            All Tags
          </Link>

          </div>
        </div>
        </div>
        </div>
        </div>

    );
  }
}

export default Toolbar;
