const path = require('path')
const sao = require('sao')

const generator = path.join(__dirname, '../src')

test('should write files with good answers (GitHub)', async () => {
  const answers = {
    name: 'create-nuxt-netlify-cms-docs',
    title: 'Nuxt Netlify CMS Docs',
    url: 'https://create-nuxt-netlify-cms-docs.robomx.tech',
    github: 'RoboMx/create-nuxt-netlify-cms-docs',
    twitter: 'robomxHQ'
  }
  const stream = await sao.mock({ generator }, answers)

  const pkg = await stream.readFile('package.json')

  expect(JSON.parse(pkg)).toEqual(expect.objectContaining({
    name: 'create-nuxt-netlify-cms-docs',
    version: '0.2020.0',
    private: true
  }))
})