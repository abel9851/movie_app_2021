import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <h3 class="movie_title"></h3>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;