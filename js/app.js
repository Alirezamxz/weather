const cityValue = document.querySelector('.city-name')
const searchBTN = document.querySelector('.search')
const resCity = document.querySelector('.res-city-name')
const resTemp = document.querySelector('.res-temp')
const resDesc = document.querySelector('.res-desc')


searchBTN.addEventListener('click', () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityValue.value+'&APPID=e1361737ee2c0ce5dc178f33aa593baf')
    .then(res => res.json())
    .then(data => {
        resCity.textContent = data['name']
        resTemp.textContent = data['main']['temp']
        resDesc.textContent = data['weather'][0]['description']
    })
})


