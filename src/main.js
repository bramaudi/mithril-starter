import m from 'mithril'
import { defaultRoutes, routes } from './router/index'
import './style.sass'

m.route(document.body, defaultRoutes, routes)
