const sites = {
  weird: [
    "https://theuselessweb.com/",
    "https://pointerpointer.com/",
    "https://heeeeeeeey.com/"
  ],
  educational: [
    "https://www.nasa.gov/",
    "https://www.britannica.com/",
    "https://ourworldindata.org/"
  ],
  art: [
    "https://www.are.na/",
    "https://www.thisiscolossal.com/",
    "https://www.behance.net/"
  ]
};

const button = document.getElementById("goBtn");
const categorySelect = document.getElementById("category");

button.addEventListener("click", () => {
  const category = categorySelect.value;
  let pool = [];

  if (category === "all") {
    pool = Object.values(sites).flat();
  } else {
    pool = sites[category];
  }

  const randomSite = pool[Math.floor(Math.random() * pool.length)];

  window.location.href = randomSite;
});
