let [text, reset] = document.querySelectorAll('input')
let button = document.querySelector('button')
let pre = document.querySelector('pre')
let spaces = 0
let backwards

button.addEventListener('click', async () => {
  await navigator.clipboard.writeText(pre.textContent)
  button.textContent = 'copied'

  setTimeout(() => {
    button.textContent = 'copy to clipboard'
  }, 1000)
})

addEventListener('wheel', event => {
  if (event.deltaY > 0)
  {
    if (backwards)
    {
      spaces--
      if (spaces === 1) backwards = false
    }
    else
    {
      spaces++
      if (spaces === Number(reset.value)) backwards = true
    }

    pre.append(' '.repeat(spaces) + text.value + '\n')
  }
})
