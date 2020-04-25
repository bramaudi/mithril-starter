import views from './_views'
import auth from './_auth'
import guest from './_guest'

export const defaultRoutes = '/'

export const routes = {
  '/': views('index'),
  '/login': guest('index'),
  '/about': auth('about'),
  '/guest': guest('guest')
}
