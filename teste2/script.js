const openModal = () => document.getElementById('myModal').classList.add('active')

const closeModal = () => document.getElementById('myModal').classList.remove('active')

//events
document.getElementById('registerCourse').addEventListener( 'click', openModal )

document.getElementById('modalClose').addEventListener( 'click', closeModal )

