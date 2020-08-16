//const validator = require('validator')
//identation: shift+alt+F
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,//true diz que o title deve ser dado pro add funcionar direito
            type: 'string'//vai impedir do title aparecer como bool se o comando for sem ="" no title
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)//chama a função addNote dentro do arquivo note.js, mandando o title e o body
    }
})


//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler() {
        notes.listNote()
        //console.log('Listing out all note!')
    }
})

//add, remove, read, list


yargs.parse()
//console.log(yargs.argv)//isso vaz ter um output
