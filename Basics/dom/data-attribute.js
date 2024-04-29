const test = document.querySelector("[data-test]");

console.log("datateset=>", test.dataset);

test.dataset.test = "43453";


test.addEventListener('click', () => {
  const currentClicks = parseInt(test.dataset.clicks)
  test.dataset.clicks = currentClicks + 1
  console.log(currentClicks)
})
