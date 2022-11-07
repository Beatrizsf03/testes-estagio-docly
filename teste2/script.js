const openModal = () => document.getElementById('myModal').classList.add('active')

const closeModal = () => document.getElementById('myModal').classList.remove('active')

const tempCourse = {
    id: "5",
    nome: "artes",
    dataCriacao: "07/11/22",
    type: "tecnologo",
    ead: "true"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_course')) ?? []
const setLocalStorage = (dbCourse) => localStorage.setItem("db_course", JSON.stringify(dbCourse))

//crud
const createCourse = (course) => {  
    const dbCourse = getLocalStorage()
    dbCourse.push (course)
    setLocalStorage(dbCourse)
}

const readCourse = () => getLocalStorage()

const updateCourse = (index, course) => {
    const dbCourse = readCourse()
    dbCourse[index] = course
    setLocalStorage(dbCourse)
}

//events
document.getElementById('registerCourse').addEventListener( 'click', openModal )

document.getElementById('modalClose').addEventListener( 'click', closeModal )

