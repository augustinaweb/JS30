window.addEventListener("load", (event) => {
  const addItems = document.querySelector(".add-items");
  const itemsList = document.querySelector(".plates");
  const input = document.querySelector("input[name='item']");

  const registeredItems = JSON.parse(localStorage.getItem("myItems"));
  const items = registeredItems ?? [];

  if (registeredItems) {
    registeredItems.map((item, i) => {
      const listItem = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `item${i}`;
      checkbox.checked = item.ready;

      const label = document.createElement("label");
      label.innerHTML = item.name;
      label.for = `item${i}`;

      function handleClick() {
        let currentItems = registeredItems.slice();
        currentItems[i].ready = !item.ready;
        //must swich "checked" value, as the item otherwise does not rerender
        checkbox.checked = item.ready;
        localStorage.setItem("myItems", JSON.stringify(currentItems));
      }

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.onclick = handleClick;

      itemsList.appendChild(listItem);
    });
  }

  addItems.addEventListener("submit", (event) => {
    const newItems = items.concat([{ name: input.value, ready: false }]);
    localStorage.setItem("myItems", JSON.stringify(newItems));
  });
});
