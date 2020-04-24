// Authenticated import function
import auth from './_auth'
import guest from './_guest'

// Code-split import function
const views = (fn) => ({ onmatch: () => import('views/' + fn).then(r => r.default) })

export const config = {
  prefix: '#!', // default "hashbang": #!
  defaultRoutes: '/'
}

export const routes = {
  '/': views('index'),
  '/login': views('index'),
  '/about': auth('about'),
  '/guest': guest('guest')
}
