import React from "react";

class Header extends React.Component {
  render() {
    return(
<div className="jumbotron text-center">
  <h1 className="display-4 text-center"><strong>Employee Directory</strong></h1>
    <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        <hr className="my-4" />
</div>
    );
  }
}
export default Header;