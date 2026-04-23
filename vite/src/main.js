import './style.css'
import leftCard from './assets/6d8654e1250f05a6a5321d4586167d1e4065aca4.jpg'
import centerCard from './assets/ef566823c84b40c9ed78cdae539438477703eefd.jpg'
import rightCard from './assets/6d8654e1250f05a6a5321d4586167d1e4065aca4.jpg'
import html from './index.html?raw'

const template = html
  .replaceAll('__LEFT_CARD__', leftCard)
  .replaceAll('__CENTER_CARD__', centerCard)
  .replaceAll('__RIGHT_CARD__', rightCard)
const page = new DOMParser().parseFromString(template, 'text/html')
const app = document.querySelector('#app')

document.documentElement.lang = page.documentElement.lang || 'en'
document.title = page.title
document.body.className = page.body.className
document.body.style.margin = '0'

app.innerHTML = page.body.innerHTML
