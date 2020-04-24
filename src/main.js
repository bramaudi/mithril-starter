import m from 'mithril'
import { config, routes } from './router'
import './style.sass'

m.route.prefix = config.prefix
m.route(document.body, config.defaultRoutes, routes)
