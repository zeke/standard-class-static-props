const standard = require('standard')

const exampleBasicClass = `class Foo {
  constructor () {
    return this
  }

  talk () {
    console.log('quack')
  }
}

const foo = new Foo()
foo.talk()
`

const exampleWithStaticProp = `class Foo {
  static color = 'yellow'

  constructor () {
    return this
  }

  talk () {
    console.log('quack')
  }
}

const foo = new Foo()
foo.talk()
`

function check(example) {
  console.log(JSON.stringify(standard.lintTextSync(example).results[0], null, 2))
}

check(exampleBasicClass)
check(exampleWithStaticProp)