window.addEventListener("load", (event) => {
  const pressedCombo = [];
  const secretCode = "gogo";

  window.addEventListener("keyup", (event) => {
    pressedCombo.push(event.key);
    if (pressedCombo.join("").includes(secretCode)) {
      pressedCombo.splice(0, pressedCombo.length);
      cornify_add();
    }
  });
});
