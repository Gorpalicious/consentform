// 1) add your route(s) here ⬇️
const routes = [
  { name: 'personal', path: '/personal' },
  { name: 'confirmation', path: '/confirmation' },
  { name: 'landing-page', path: '/start' },
  { name: 'participant-consent-form', path: '/participant-consent-form' },
]

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
}
