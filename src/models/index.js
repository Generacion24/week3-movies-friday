const Genre = require("./Genre");
const Movie = require("./Movie");

Movie.belongsToMany(Genre,{through:'MoviesGenres'})
Genre.belongsToMany(Movie,{through:'MoviesGenres'})