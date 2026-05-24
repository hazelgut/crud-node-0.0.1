const resultNode = document.querySelector('.result-container')
async function handleFetchRequest(event) {
  event.preventDefault()
  try {
    const data = await fetch('http://localhost:4589/notes').then((res) =>
      res.json(),
    )
    for (let item of data) {
      if (!item.content) {
        throw new Error('no content')
      }
      const paragraph = document.createElement('p')
      paragraph.innerText = JSON.stringify(item)
      resultNode.appendChild(paragraph)
    }
  } catch (err) {
    console.error(err)
  }
}
const formNode = document.querySelector('.form-container')
formNode.addEventListener('submit', handleFetchRequest)
