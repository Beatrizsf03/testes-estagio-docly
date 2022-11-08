const openModal = () => document.getElementById('myModal').classList.add('active')

const closeModal = () => {
    cleanCampos()
    document.getElementById('myModal').classList.remove('active')
}
    

const tempCourse = {
    id: "6",
    nome: "biologia",
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

const deleteCourse = (index) => {
    const dbCourse = readCourse()
    dbCourse.splice(index, 1)
    setLocalStorage(dbCourse)
}

//interação usuário
const saveCourse = () => {
    if(isValidCampos()){
        const course = {
            id: document.getElementById('id').value,
            nome: document.getElementById('name').value,
            dataCricao: document.getElementById('data').value,
            tipo: document.getElementById('tipo').value,
            ead: document.getElementById('ead').value
        }
        createCourse(course)
        cleanCampos()
        closeModal()

    }
}

const isValidCampos = () => {
    return document.getElementById('modal-form').reportValidity()
}

const cleanCampos = () => {
    const campos = document.querySelectorAll('.campo')
    campos.forEach(campo => campo.value = "")
}



//events
document.getElementById('registerCourse').addEventListener( 'click', openModal )

document.getElementById('modalClose').addEventListener( 'click', closeModal )

document.getElementById('save').addEventListener( 'click', saveCourse)

