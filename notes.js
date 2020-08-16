const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('These are your notes, my friend: \n\n'))
    notes.forEach(note => {
        console.log('Title: ' + note.title + '\nBody: ' + note.body + '\n\n')
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)//busca a nota por título
    if (foundNote) {//se tem uma nota duplicada
        console.log(chalk.green.bold.inverse('Note Found!'))
        console.log('\nTitle: ' + foundNote.title + '\nBody: ' + foundNote.body)
    } else {// se tiver
        console.log(chalk.red.bold.inverse('Note not found!'))
    }

}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    //CAN BE TRANSLATED IN:
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {//se não tem uma nota duplicada
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added!'))
    } else {// se tiver
        console.log(chalk.red.bold.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}