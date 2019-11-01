import React from "react"
import Toolbar from "../components/toolbar"
import BodyView from "../components/body"
import ReactHelmet from "../components/head"


export default ({location}) => (

  <div>
    <ReactHelmet
            tabTitle={"IndexPPR"}
    />
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar
      isSolid={false}
    />
    <BodyView/>
  </div>
)