import logo from './assets/2d06b1c7a47f544f9a701cae5d9268b71bd7ccc6.png'
import html from './index.html?raw'

const template = html.replaceAll('__LOGO__', logo)
const page = new DOMParser().parseFromString(template, 'text/html')
const app = document.querySelector('#app')

document.documentElement.lang = page.documentElement.lang || 'en'
document.title = page.title
document.body.className = page.body.className
document.body.style.margin = '0'

app.innerHTML = page.body.innerHTML
