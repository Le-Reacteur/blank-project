import React from "react";

class Movie extends React.Component {
  renderStar = () => {
    if (this.props.isFavorite === true) {
      return (
        <img
          alt="favorite"
          className={"favorite-icon"}
          src={"/images/star.png"}
        />
      );
    }
    return null;
  };
  render = () => {
    return (
      <div>
        {this.props.name} {this.renderStar()}
      </div>
    );
  };
}

export default Movie;
