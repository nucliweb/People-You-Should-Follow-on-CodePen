const codepenCoders = require('./codepen-coders')
const fs = require('fs')
const codepenUrl = 'https://codepen.io/'

let markdown = `
# People You Should Follow on [CodePen](https://codepen.io/)

> If you like SVG, Animation, Canvas, Interaction, WebGL, Three.js, Shader, GLSL, P5.js and Creative Code

## Demo or it didn't happen

| CodePen Coder  | Tags  |
| -------------- | ----- |
`
for (const codepenCoder of codepenCoders.sort((a, b) => a.name > b.name ? 1 : -1)) {
  const tags = codepenCoder.tags.map(tag => `\`${tag}\``)
  markdown += `| [${codepenCoder.name}](${codepenUrl}${codepenCoder.codepen}) | ${tags.join(', ')} |\n`
}

markdown += `
------------------------

By [Joan León](https://joanleon.dev) | [@nucliweb](https://twitter.com/nucliweb)
`

console.info('Markdown generated 😊')

fs.writeFileSync(`${process.cwd()}/README.md`, markdown, 'utf-8')
