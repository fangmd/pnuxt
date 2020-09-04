function getGitVersionInfo() {
  if (process.env.NODE_ENV === 'production') {
    try {
      const fs = require('fs')
      const gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim() // ref: refs/heads/master
      const ref = gitHEAD.split(': ')[1] // refs/heads/master
      const branchName = gitHEAD.split('/')[2] // master
      const gitVersion = fs.readFileSync('.git/' + ref, 'utf-8').trim() // git版本号，例如：db3b1d0e91f41026ebf50fc20a17df8a5317dd57
      const gitCommitVersion = '"' + branchName + ': ' + gitVersion + '"' // 例如dev环境: "master: db3b1d0e91f41026ebf50fc20a17df8a5317dd57"
      return gitCommitVersion
    } catch (error) {
      console.log(error)
      return ''
    }
  } else {
    return ''
  }
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        name: 'time',
        content: new Date().toString() + getGitVersionInfo(),
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {
    port: 3005,
    host: '0.0.0.0',
  },
}
