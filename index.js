function shuffleArray(array = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const shuffle = () => {
  const shuffledArray = shuffleArray();

  for (let i = 0; i < 9; i++) {
    const item = document.querySelector(`#numberlist li:nth-child(${i + 1})`);
    item.setAttribute("data-order", shuffledArray[i]);
  }
};

const sort = () => {
  for (let i = 0; i < 9; i++) {
    const item = document.querySelector(`#numberlist li:nth-child(${i + 1})`);
    item.setAttribute("data-order", i + 1);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#shuffle").addEventListener("click", (e) => {
    shuffle();
  });

  document.querySelector("#sort").addEventListener("click", (e) => {
    sort();
  });
});
