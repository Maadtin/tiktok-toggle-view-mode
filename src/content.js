console.log('tiktok toggler')

const url = new URL(window.location.href)

const buttonsContainer = document.querySelector(
  '.tiktok-wc6k4c-DivActionItemContainer'
)

if (buttonsContainer) {
  // Get last button in the list
  const clonedCommentCount =
    buttonsContainer.children[buttonsContainer.children.length - 1].cloneNode(
      true
    )
  // append clone to the start of the list
  buttonsContainer.prepend(clonedCommentCount)

  clonedCommentCount.addEventListener('click', () => alert('Hello'))
}

if (url.searchParams.has('is_from_webapp')) {
  const viewContainer = document.querySelector(
    '.tiktok-15a10g3-DivVideoWrapper'
  )
  //   if (viewContainer) {
  //     viewContainer.style.transform = "rotate(-90deg)";
  //   }
}

console.log(buttonsContainer)
