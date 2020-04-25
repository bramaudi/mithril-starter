import m from 'mithril'
import { defaultRoutes, routes } from './router/index'
import './app.sass'

m.route(document.body, defaultRoutes, routes)
