window.addEventListener("load", (event) => {
  const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
  ];

  const bandsList = document.querySelector("#bands");

  const sortAndRenderItems = () => {
    const sortedBands = bands.sort((a, b) => {
      const articles = ["The", "A", "An"];

      const startsWithArticle = (x) => articles.includes(x.split(" ")[0]);

      const removeArticle = (x) => {
        const array = x.split(" ");
        array.shift();
        const newString = array.join(" ");
        return newString;
      };

      let a1 = a;
      let b1 = b;

      if (startsWithArticle(a)) {
        a1 = removeArticle(a);
      }

      if (startsWithArticle(b)) {
        b1 = removeArticle(b);
      }

      a1 = a1.toLowerCase();
      b1 = b1.toLowerCase();

      if (a1 > b1) {
        return 1;
      }

      if (a1 < b1) {
        return -1;
      }

      return 0;
    });

    sortedBands.map((band) => {
      const listItem = document.createElement("li");
      listItem.innerText = band;

      bandsList.appendChild(listItem);
    });
  };

  sortAndRenderItems();
});
