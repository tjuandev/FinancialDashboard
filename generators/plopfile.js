const atomicDesignLayers = [
  {
    name: 'Atom',
    value: 'atoms'
  },
  {
    name: 'Molecule',
    value: 'molecules'
  },
  {
    name: 'Organism',
    value: 'organisms'
  },
  {
    name: 'Template',
    value: 'templates'
  }
]

const layerPath = `../src/components/{{component_type}}`
const componentPath = `${layerPath}/{{pascalCase name}}`

module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator('components', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      },
      {
        type: 'list',
        name: 'component_type',
        choices: atomicDesignLayers
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${layerPath}/index.ts`,
        skipIfExists: true
      },
      {
        type: 'add',
        path: `${componentPath}/__tests__/{{pascalCase name}}.tsx`,
        templateFile: 'templates/components/__tests__/index.tsx.hbs'
      },
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: `${componentPath}/styles.tsx`,
        templateFile: 'templates/components/styles.tsx.hbs'
      }
    ]
  })
}
