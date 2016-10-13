"use strict"

var Sequelize = require('sequelize')
var ModelTampil = require('./models')
var td = ModelTampil.Todos


td.help()
td.display()

process.argv.forEach((pilihan) => {
  if(pilihan === "add"){
    td.create({
      task:(process.argv[3]),
      status:"[ ]"
    })
  }
})

process.argv.forEach((pilihan) => {
  if(pilihan === "delete"){
    td.destroy({
      where:{
        id:(process.argv[3])
      }
    })
  }
})


process.argv.forEach((pilihan) => {
if(pilihan === "complete"){
      td.update({
        status:"[X]"
      },
      {
          where:{id:(process.argv[3])}
      })
  }
})


process.argv.forEach((pilihan) => {
if(pilihan === "uncomplete"){
      td.update({
        status:"[ ]",
        where:{
          id:(process.argv[3])
        }
      })
  }
})
