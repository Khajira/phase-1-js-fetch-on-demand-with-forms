const init = () => {
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Movie not found");
      }
      return response.json();
    })
    .then((data) => {
      const title = document.querySelector("section#movieDetails h4");
      const summary = document.querySelector("section#movieDetails p");
  
      title.innerText = data.title;
      summary.innerText = data.summary;
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error);
    });
  
}

document.addEventListener('DOMContentLoaded', init);