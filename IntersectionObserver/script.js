const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
  console.log("entries", entries)
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)

    // Once the ELEMENT is intersected then the OBSERVER stops observing the ELEMENT
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
},{
  // Sets to 100% of the element must be on the screen before isIntersecting is set to true
  threshold: 1,
  // Root is the Observer container by default is is body
  // root: "card-container",
  rootMargin: "100px",
}) 

// Lazy load
const lastCardObserver = new IntersectionObserver(entries => {
  const lastCard= entries[0]
  // If last card is not visible yet, do nothing
  if (!lastCard.isIntersecting) return

  loadNewCards()
  // Unobserve the previous last element
  lastCardObserver.unobserve(lastCard.target)
  // Observer the new Last Element
  lastCardObserver.observe(document.querySelector(".card:last-child"))
})

lastCardObserver.observe(document.querySelector(".card:last-child"))

// Set observer for the target element
cards.forEach(card => {
  observer.observe(card)
})

const cardContainer = document.querySelector(".card-container")
function loadNewCards() {
  for (let i=0; i<10; i++) {
    const card = document.createElement("div")
    card.textContent = `New Card-${i+1}`
    card.classList.add("card")
    observer.observe(card)
    cardContainer.append(card)
  }
}