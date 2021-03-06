import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie_data">
        {/*styleに　{{}}、このように二つ使う理由は
        reactでは
        htmlではtagの中に　直接　style=で入力するが、
        {}で抱えて中はjson形だからだ。
        */}
        <h3 class="movie_title" style={{ backgroundColor: "red" }}>
          {title}
        </h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>
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
