function suggestMovie() {
  const age = parseInt(document.getElementById("age").value);
  const genre = document.getElementById("genre").value;

  let movieTitle, movieRating, movieDescription, movieImage;

  if (age >= 18) {
    switch (genre) {
      case "acciones":
        movieTitle = "Intellestelar";
        movieRating = "+18";
        movieDescription = "¡Bienvenidos a Intellestelar, tu destino definitivo para explorar el universo cinematográfico! En nuestra tienda de películas, te sumergirás en un cosmos de entretenimiento sin límites, donde cada título es una estrella en su propio sistema.";
        movieImage = "intellestelar.jpg";
        break;
      case "dramas":
        movieTitle = "Rapidos y furiosos 6";
        movieRating = "T";
        movieDescription = "¡Prepárate para la adrenalina a toda velocidad con la película que cambió las reglas del juego! Rápidos y Furiosos te sumerge en un mundo de emocionantes carreras clandestinas, intrincadas intrigas y una acción sin límites.";
        movieImage = "rapido.jpg";
        break;
      case "comedia":
        movieTitle = "500 dias con ella";
        movieRating = "+18";
        movieDescription = "¡En una historia de amor como ninguna otra con la cautivadora película 500 días con ella! Esta película te llevará a través de un viaje emocional que explora las complejidades del amor, la alegría y el corazón roto de una manera única y refrescante.";
        movieImage = "dias.jpg";
        break;
    }
  } else {
    switch (genre) {
      case "accion":
        movieTitle = "Toy story";
        movieRating = "PG-13";
        movieDescription = "¡Experimenta la magia y la diversión de la exitosa franquicia de Pixar con nuestra colección de películas Toy Story! Sumérgete en un mundo de aventuras donde los juguetes cobran vida y descubre la amistad, la valentía y la imaginación a través de las emocionantes historias de Woody, Buzz Lightyear y todos sus amigos.";
        movieImage = "story.jpg";
        break;
      case "drama":
        movieTitle = "BRAVE";
        movieRating = "PG-13";
        movieDescription = "¡Sumérgete en las legendarias tierras de Escocia con nuestra cautivadora colección de películas Brave! Descubre un mundo de valentía, magia y autodescubrimiento a través de la historia de la intrépida Mérida, una joven princesa que desafía las tradiciones y lucha por forjar su propio destino.";
        movieImage = "brave.jpg";
        break;
      case "comedia":
        movieTitle = "Mi villano favorito";
        movieRating = "G";
        movieDescription = "¡Prepárate para sumergirte en un mundo de diversión y travesuras con nuestra colección de películas de Mi Villano Favorito! Únete al cautivador Gru, un villano con un corazón de oro, y a sus adorables Minions mientras emprenden aventuras que te harán reír, emocionarte y reflexionar sobre el poder de la amistad y la redención.";
        movieImage = "villano.jpg";
        break;
    }
  }

  document.getElementById("movieTitle").textContent = movieTitle;
  document.getElementById("movieRating").textContent = movieRating;
  document.getElementById("movieDescription").textContent = movieDescription;
  document.getElementById("movieImage").src = movieImage;

  document.getElementById("movieResult").classList.remove("hidden");
}

