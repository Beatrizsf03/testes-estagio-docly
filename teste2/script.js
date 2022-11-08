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

        const index = document.getElementById('id').dataset.index
        if(index === 'new'){
            createCourse(course)
            updateTabela() 
            closeModal()
        } else {
            updateCourse(index, course)
            updateTabela()
            closeModal()
        }
    }
}

const isValidCampos = () => {
    return document.getElementById('modal-form').reportValidity()
}

const cleanCampos = () => {
    const campos = document.querySelectorAll('.campo')
    campos.forEach(campo => campo.value = "")
    document.getElementById('id').dataset.index = 'new'
}

const createLinha = (course, index) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
    <td>${course.id}</td>
    <td>${course.name}</td>
    <td>${course.data}</td>
    <td>${course.tipo}</td>
    <td>${course.ead}</td>
    <td>
        <button type="button" class="btn azul" id="delete-${index}">Excluir</button>
        <button type="button" class="btn" id="edit-${index}">Editar</button>
    </td>
    `
    document.querySelector('#tabelaCourse>tbody').appendChild(novaLinha)
}

const updateTabela = () => {
    const dbCourse = readCourse()
    cleanTabela()
    dbCourse.forEach(createLinha)
}

const cleanTabela = () => {
    const linhas = document.querySelectorAll('#tabelaCourse>tbody tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))

}

const editarDelete = (event) => {
    if(event.target.type === 'button'){
        const [action, index] = event.target.id.split('-')
        
        if(action === "edit"){
            editCourse(index)
        } else if(action === "delete"){
            const course = readCourse()[index]
            const resposta = confirm(`Deseja excluir o curso ${course.name}?`)
            if(resposta){
                deleteCourse(index)
                updateTabela()
            }
        }
    }
    
}

const editCourse = (index) => {
    const course = readCourse()[index]
    course.index = index
    fillCampos(course)
    openModal()
}

 const fillCampos = (course) => {
    document.getElementById('id').value = course.id
    document.getElementById('name').value = course.name
    document.getElementById('data').value = course.data
    document.getElementById('tipo').value = course.tipo
    document.getElementById('ead').value = course.ead
    document.getElementById('id').dataset.index = course.index
 }



updateTabela()

//events
document.getElementById('registerCourse').addEventListener( 'click', openModal )

document.getElementById('modalClose').addEventListener( 'click', closeModal )

document.getElementById('save').addEventListener( 'click', saveCourse)

document.querySelector('#tabelaCourse>tbody').addEventListener( 'click', editarDelete)

document.getElementById('cancel').addEventListener( "click", closeModal)
