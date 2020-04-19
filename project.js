const form = document.getElementById('film-form')
const titleElement = document.querySelector('#title')
const directorElement = document.querySelector('#director')
const urlElement = document.querySelector('#url')
const cardBody = document.querySelectorAll('.card-body')[1]
const clear = document.getElementById('clear-films')
const ui = new UI()
const storage = new Storage() 

 eventListeners()

 function eventListeners(){
     form.addEventListener('submit',addFilm)
     document.addEventListener('DOMContentLoaded',function(){
        let films = storage.getFilmsFromStorage()
        ui.loadAllFilms(films)
     })
     clear.addEventListener('click',clearAllFilms)
     cardBody.addEventListener('click',deleteFilm)
 }

 function addFilm(e){
     const title = titleElement.value
     const director = directorElement.value
     const url = urlElement.value

     if(title === '' || director === '' || url === ''){
        ui.displayMessages("Tüm alanları doldurunuz...","danger")
     }else{
         const newFilm = new Film(title, director, url)

         //Add the film in the ui
         ui.addFilmToUI(newFilm)
         storage.addFilmToStorage(newFilm)
         ui.displayMessages("Film başarıyla eklendi...","success")
     }

     ui.clearInputs(titleElement,directorElement,urlElement)
     e.preventDefault()
 }

 function deleteFilm(e){
    if(e.target.id === 'delete-film'){
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages('Silme işlemi başarıyla gerçekleşti...','success')
    }
 }

 function clearAllFilms(){
  if(confirm('Tüm filmleri silmek istediğinizden emin misiniz ?')){
    ui.clearAllFilmsFromUI()
    storage.clearAllFilmsFromStorage()
  }

 }