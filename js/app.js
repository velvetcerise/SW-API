
let container = document.getElementById('paint');
// console.log(container);

    
//AJAX CALL
    function handleResponse(data){
    
    let entrie = data.results;
    let info = ``;
    //console.log(entrie);
    let starWarsInfo = entrie.forEach(element =>{
        let title = element.title;
        console.log(title);
        let episode = element.episode_id;
        console.log(episode);
        // console.log(character);
        
        //Get modal's info
        let character = element.characters;
        let infoChar =  ``;
        //Painting Modal
        let dataChar = character.forEach(char =>{
            infoChar  += 
            `<a href="#modal1"  id="modal" class="waves-effect waves-light btn modal-trigger blue-grey">
                <li class="info">${char}</li>
            </a>`;
    
    }
    );

    //Card with title, epise and Character
        info +=         
            `<div class = 'row center'>
                <div class= 'col xl12'>
                    <div class="card">

                        <span class="card-title"><strong>${title}</strong></span>
                            <div class="card-tabs">
                                <div class="card-content">
                                <p> ${episode} </p>
                            </div>
                        </div>
                    <div class="card-content">
                        <ul> ${infoChar}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            `  
    //console.log(info)
    })
    
    container.innerHTML = info;
            let about = document.getElementsByClassName('info');
            let links = Array.from(about);
            links.forEach(element =>{
                element.addEventListener('click', ajaxModal)
        }); 

    }

    
    // console.log(links);
    // console.log(info); 

        function ajaxModal(e) {
        e.preventDefault;
        let dataChar = e.target.dataset.url;
        console.log(dataChar)
                $.ajax({
                    url:dataChar           
                }).done(characterData)
        };
    //Paiting data-modal (name, eyes, heigth)
    const characterData = (data) =>{
        console.log(data);
        $('#name').html(data.name);
        $('#birth').html(data.birth_year);
        // $('#hair-color').html(data.hair_color);
        // $('#mass').html(data.mass);
        // $('#height').html(data.height);
        // $('#skin-color').html(data.skin_color);
        // $('#eye-color').html(data.eye_color);
    // console.log(event.target.innerText);
    }
    
    $.ajax({ 
        url: `https://swapi.co/api/films/`
        }).done(handleResponse); 
    

//Modal
$(document).ready(function () {
    $('.modal').modal();
});