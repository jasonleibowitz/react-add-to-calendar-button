module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AddToCalendar',
      externals: {
        react: 'React'
      }
    }
  }
}
