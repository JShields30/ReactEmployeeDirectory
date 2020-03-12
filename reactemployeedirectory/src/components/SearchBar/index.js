import React from "react";

class SearchBar extends React.Component {
  render() {
    return (  
    <form 
        class="form-inline justify-content-center md-form mx-auto mb-4">
        <input 
            class="form-control mr-sm-2" 
            type="text" 
            placeholder="Search" 
            aria-label="Search"
        />
        <button 
            class="btn aqua-gradient btn-rounded btn-sm my-0" 
            type="submit"
        >Search</button>
    </form>
    );
  }
}
export default SearchBar;
