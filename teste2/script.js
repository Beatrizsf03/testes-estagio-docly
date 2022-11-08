const openModal = () => document.getElementById('myModal').classList.add('active')

const closeModal = () => {
    cleanCampos()
    document.getElementById('myModal').classList.remove('active')
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
            name: document.getElementById('name').value,
            data: document.getElementById('data').value,
            tipo: document.getElementById('tipo').value,
            ead: document.getElementById('ead').value
        }
        createCourse(course)    
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

const createLinha = (course) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
    <td>${course.id}</td>
    <td>${course.name}</td>
    <td>${course.data}</td>
    <td>${course.tipo}</td>
    <td>${course.ead}</td>
    <td>
        <button class="btn azul">Excluir</button>
        <button class="btn">Editar</button>
    </td>
    `
    document.querySelector('#tabelaCourse>tbody').appendChild(novaLinha)
}

const updateTabela = () => {
    const dbCourse = readCourse()
    dbCourse.forEach(createLinha)
}

updateTabela()

//events
document.getElementById('registerCourse').addEventListener( 'click', openModal )

document.getElementById('modalClose').addEventListener( 'click', closeModal )

document.getElementById('save').addEventListener( 'click', saveCourse)

