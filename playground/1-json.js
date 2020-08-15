const fs = require('fs')


const buffer = fs.readFileSync('1-json.json')
const JSONstring = buffer.toString()
const parsed = JSON.parse(JSONstring)

parsed.name = 'Igor Gostoso'
parsed.age = 21

const parsedJSON = JSON.stringify(parsed)
fs.writeFileSync('1-json.json', parsedJSON)

