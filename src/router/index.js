// Authenticated import function
import _auth from './_auth'
import _guest from './_guest'

// Code-split import function
const views = (fn) => ({ onmatch: () => import('views/' + fn).then(r => r.default) })

export const config = {
  prefix: '#!', // default "hashbang": #!
  defaultRoutes: '/'
}

export const routes = {
  '/': views('index'),
  '/login': views('index'),
  '/about': _auth('about'),
  '/guest': _guest('guest')
}
