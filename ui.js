function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
    const filmList = document.getElementById('films')
    filmList.innerHTML +='<tr>  <td><img src="'+newFilm.url+'" class="img-fluid img-thumbnail"></td> <td>'+newFilm.title+'</td><td>'+newFilm.director+'</td><td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td></tr>'

    console.log(filmList.innerHTML)
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value=''
    element2.value=''
    element3.value=''
}

UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector('.card-body')
    
    const alert =document.createElement('div')
    alert.className='alert alert-'+type+''
    alert.textContent = message
    cardBody.appendChild(alert)
    
    setTimeout(() => {
        alert.remove()
    }, 1000);
}

UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById('films')
    films.forEach(function(film){
        filmList.innerHTML +='<tr>  <td><img src="'+film.url+'" class="img-fluid img-thumbnail"></td> <td>'+film.title+'</td><td>'+film.director+'</td><td><a href="#" id="delete-film" class="btn btn-danger>Filmi Sil</td></tr>'
    })
}

UI.prototype.deleteFilmFromUI=function(element){
    element.parentElement.parentElement.remove()
}

UI.prototype.clearAllFilmsFromUI= function(){
    const filmList = document.getElementById('films')
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove()
    }
}