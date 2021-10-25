window.addEventListener("load", (event) => {
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
      //No sure what 'this' refers to here
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function scrollInArray() {
    //HTML Collection VS Array VS Node List
    // forEach works on non array collections as well.
    //What are the collection types?
    const allImages = Array.prototype.slice.call(
      document.getElementsByClassName("slide-in")
    );

    const activeImages = allImages.filter(
      (image) =>
        image.offsetTop > window.scrollY &&
        image.offsetTop - 300 < window.scrollY
    );

    const passiveImages = allImages.filter(
      (image) => image.offsetTop + 300 < window.scrollY
    );

    console.log(window.scrollY, window.innerHeight);

    if (activeImages.length > 0) {
      function addClass() {
        activeImages.map((image) => image.classList.add("active"));
        passiveImages.map((image) => image.classList.remove("active"));
      }
      addClass();
    }
  }

  function scrollInNodeList() {
    const allImages = document.querySelectorAll(".slide-in");
    //Doesn't work with HTML Collection
    //const allImages = document.getElementsByClassName("slide-in");

    allImages.forEach((image) => {
      const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
      const imageBottom = image.offsetTop + image.height;

      const startShowingImage = slideInAt > image.offsetTop;
      const imageStillVisible = imageBottom > window.scrollY;

      startShowingImage && imageStillVisible
        ? image.classList.add("active")
        : image.classList.remove("active");
    });
  }

  //document.addEventListener("scroll", debounce(scrollInArray));

  document.addEventListener("scroll", debounce(scrollInNodeList));
});
