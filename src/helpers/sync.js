"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// SYCHRONIZATION:

module.exports = async function() {

    return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */
    
    /* Department & Personnel */
    const Department = require('../models/department.model')
    const Personnel = require('../models/personnel.model')
    const departments = [
        "FullStack Department",
        "DevOps Department",
        "CyberSec Department",
    ]

    Personnel.create({
        departmentId: "65fe927a4e565ce508443a5d",
        username: "admin",
        password: "admin123",
        firstName: "admin",
        lastName: "admin",
        phone: "123456789",
        email: "admin@admin.com",
        title: "title",
        salary: 2500,
        description: "description",
        isActive: true,
        isAdmin: true,
        isLead: false,
        startedAt: "2023-10-15 13:14:15"
    })

    Personnel.create({
        departmentId: "65fe927a4e565ce508443a5d",
        username: "fullstackleader",
        password: "fullstackleader123",
        firstName: "fullstackleader",
        lastName: "fullstackleader",
        phone: "123456789",
        email: "fullstackleader@fullstackleader.com",
        title: "title",
        salary: 2500,
        description: "description",
        isActive: true,
        isAdmin: false,
        isLead: true,
        startedAt: "2023-10-15 13:14:15"
    })

    Personnel.create({
        departmentId: "65fe927a4e565ce508443a5d",
        username: "dogan",
        password: "dogan123",
        firstName: "dogan",
        lastName: "dogan",
        phone: "123456789",
        email: "dogan@dogan.com",
        title: "title",
        salary: 2500,
        description: "description",
        isActive: true,
        isAdmin: true,
        isLead: false,
        startedAt: "2023-10-15 13:14:15"
    })

    departments.forEach(value => {
        // Department.create:
        Department.create({ name: value }).then((department) => {
            console.log('- Department Added.')
            // Personnel.create:
            for (let i in [...Array(10)]) {
                Personnel.create({
                    departmentId: department._id,
                    username: "test" + (value[0] + i),
                    password: "1234",
                    firstName: "firstName",
                    lastName: "lastName",
                    phone: "123456789",
                    email: "test" + (value[0] + i) + "@site.com",
                    title: "title",
                    salary: 2500,
                    description: "description",
                    isActive: true,
                    isAdmin: false,
                    isLead: false,
                    startedAt: "2023-10-15 13:14:15"
                })
            }
            console.log('- Personnels Added.')
        })
    })
    /* Department & Personnel */
}