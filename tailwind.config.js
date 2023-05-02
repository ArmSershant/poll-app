/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/app.component.{html,ts}',
    './src/app/poll/components/addpoll/addpoll.component.{html,ts}',
    './src/app/poll/components/activepoll/activepoll.component.{html,ts}',
    './src/app/poll/components/allpoll/allpoll.component.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

