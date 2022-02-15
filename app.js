let friends = ["Zuka", "Kaley", "Jon", "Daze", "Zeal"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    const div = document.createElement("div");
    div.className = "friend";

    const h3 = document.createElement("h3");
    h3.textContent = friends[i];

    div.appendChild(h3);
    document.body.appendChild(div);

    for (let x = 99; x >= 1; x--) {
      const p = document.createElement("p");

      if (x === 2) {
        p.textContent =
          "2 lines of code in the file, 2 lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, 1 line of code in the file";
      } else if (x === 1) {
        p.textContent =
          "1 line of code in the file, 1 line of code; " +
          friends[i] +
          " strikes one out, clears it all out, no more lines of code in the file";
      } else {
        p.textContent =
          x +
          " lines of code in the file, " +
          x +
          " lines of code; " +
          friends[i] +
          " strikes one out, clears it all out, " +
          (x - 1) +
          " lines of code in the file";
      }

      div.appendChild(p);
    }
  }
});
