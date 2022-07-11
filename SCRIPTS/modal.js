const buttomOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttomOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEsc = event.key === 'Escape'

    if (isEsc) {
        modalWrapper.classList.add('invisible')
    }
})