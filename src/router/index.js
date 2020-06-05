import views from './_views' // Import default
import auth from './_auth' // Import w/ Logged middleware
import guest from './_guest' // Import w/ Non-logged middleware

export const defaultRoutes = '/' // initial route
export const prefix = '/mithril-starter' // Prefix route, default: #!

export const routes = {
  '/': views('index'), // views('index', false) to disable Layout
  '/login': guest('login'),
  '/admin': auth('admin'),
  '/:404...': views('404')
}
