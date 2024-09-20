const express = require('express');
const path = require('path');
const {writeFileSync, readFileSync} = require('fs');
const { log } = require('console');


const student = JSON.parse(readFileSync(path.join(__dirname, '../db/db.json')));
const pageLoad = (req, res) => {
    
    res.render('index')
};

const index = (req, res) =>{
      res.render('table', {
        student
      });
}

const datastore = (req, res) =>{

     
        const {name, email, cell, username} = req.body;

         student.push({
                id : student[student.length - 1].id,
                name : name,
                email : email,
                cell : cell,
                username : username,
            });

            //initia data 

          writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(student));

        res.redirect('/index')
}





module.exports = { pageLoad, datastore, index}