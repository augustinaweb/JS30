window.addEventListener("load", (event) => {
  const handleMouseMove = (event) => {
    const header = document.querySelector("h1");

    const cyanShadow = `calc(25vw - ${0.5 * event.clientX}px ) calc(-50vh + ${
      event.clientY
    }px) 0 rgba(44, 223, 247, 0.6)`;

    const magentaShadow = `calc(-25vw + ${
      0.5 * event.clientX
    }px) calc(-50vh + ${event.clientY}px) 0 rgba(247, 44, 220, 0.6)`;

    const greenShadow = `calc(-25vh + ${0.5 * event.clientY}px) calc(50vw - ${
      event.clientX
    }px) 0 rgba(61, 247, 44, 0.6)`;

    const blueShadow = `calc(25vh - ${0.5 * event.clientY}px) calc(50vw - ${
      event.clientX
    }px) 0 rgba(44, 108, 247, 0.6)`;

    header.setAttribute(
      "style",
      `text-shadow: ${cyanShadow}, ${magentaShadow}, ${greenShadow}, ${blueShadow}`
    );
  };

  document.addEventListener("mousemove", (event) => {
    handleMouseMove(event);
  });
});
