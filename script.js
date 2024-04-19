document.addEventListener("DOMContentLoaded", function() {
    fetch("news.json")
      .then(response => response.json())
      .then(data => {
        const newsContainer = document.getElementById("newsContainer");
  
        data.actualites.forEach(actualite => {
          const newsItem = document.createElement("div");
          newsItem.classList.add("news-item");
  
          const title = document.createElement("h3");
          title.textContent = actualite.titre;
  
          const date = document.createElement("p");
          date.classList.add("date");
          date.textContent = actualite.date;
  
          const description = document.createElement("p");
          description.textContent = actualite.descriptif;
  
          const theme = document.createElement("p");
          theme.classList.add("theme");
          theme.textContent = `Thème: ${actualite.theme}`;
  
          newsItem.appendChild(title);
          newsItem.appendChild(date);
          newsItem.appendChild(description);
          newsItem.appendChild(theme);
  
          newsContainer.appendChild(newsItem);
        });
      })
      .catch(error => console.error("Erreur lors du chargement des actualités:", error));
  });
  