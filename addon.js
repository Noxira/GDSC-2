var movies = [
    ["The Medium", "Dune (IMAX 2D)", "Don't Breathe 2", "Halloween Kills", "Dune", "No Time to Die", "Nussa", "Shang-Chi", "Free Guy", "Jungle Cruise", "Black Widow"],
    ["https://media.21cineplex.com/webcontent/gallery/pictures/163453237595721_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163392435121775_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163359809322777_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163351087312956_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163307215533128_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163188974336814_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163188898724513_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/16303163626913_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163031653222299_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163031668566130_290x426.jpg", "https://media.21cineplex.com/webcontent/gallery/pictures/163152822368051_290x426.jpg"],
    ["the_medium.html", "dune.html", "dont_breathe.html", "halloween_kills.html", "dune.html", "no_time_to_die.html", "nussa.html", "shang_chi.html", "free_guy.html", "jungle_cruise.html", "black_widow.html"]
];

for (var i=0; i< movies[0].length; i++){
    var container = document.createElement("div");
    container.className = "movie-container";
    container.id = "movie-container";
    var desc, texth4, aElement, poster, image;

    poster = document.createElement("div");
    poster.className = "poster";
    image = document.createElement("img");
    image.src = movies[1][i];
    image.alt = movies[0][i];
    poster.append(image);

    aElement = document.createElement("a");
    aElement.href = movies[2][i];
    desc = document.createElement("div");
    desc.className = "desc";
    texth4 = document.createElement("h4");
    texth4.innerHTML = movies[0][i];

    desc.append(texth4);
    aElement.append(poster);
    aElement.append(desc);
    container.append(aElement);
    movie.appendChild(container);
}