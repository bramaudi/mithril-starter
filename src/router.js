// Code-split import function
const views = (fn) => ({ onmatch: () => import('views/' + fn).then(r => r.default) })

export const config = {
  prefix: '#!', // default "hashbang": #!
  defaultRoutes: '/'
}

export const routes = {
  '/': views('index'),
  '/about': views('about')
}
