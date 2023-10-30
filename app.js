// we want to get our random jokes through an api call when you click on the button
// show it on our page

const container = document.querySelector('.container')
const factContainer = document.querySelector('.facts') 
const button = document.querySelector('button')
button.addEventListener('click', async () => {
    factContainer.classList.remove('fade')
    const res = await axios.get('https://meowfacts.herokuapp.com/')
    const catFact = res.data.data[0]
    factContainer.innerText = catFact;
    factContainer.classList.add('fade')
    container.classList.add('open-up')
})