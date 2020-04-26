import m from 'mithril'
import { defaultRoutes, routes, prefix } from './router/index'
import 'app.sass'
import 'assets/styles/stylesheet.sass'

m.route.prefix = prefix
m.route(document.body, defaultRoutes, routes)
