const adviceId = document.getElementById('advice-id')
const adviceText = document.getElementById('advice-text')

async function dadosDaAPI() {
  try {
    const url = "https://api.adviceslip.com/advice"
    const resposte = await fetch(url)
    const respost = await resposte.json()

    const number = respost.slip.id
    const text = respost.slip.advice

    adviceId.innerText = `ADVICE #${number}`
    adviceText.innerText = `"${text}"`

  } catch (error) {
    console.log(error)
  }
}

dadosDaAPI()

document.getElementById('play-button')
.addEventListener('click', dadosDaAPI)