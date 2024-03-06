const button = document.getElementById('switch')
const theme = document.querySelector('html')
const img = document.querySelector('.info img')

button.addEventListener('click', ()=> {
    theme.classList.toggle('light')
    if(theme.classList.contains('light')) {
      img.setAttribute('src', './src/images/profile02.jpg')
    }else{
      img.setAttribute('src', './src/images/profile01.jpg')
    }
}
)