const listaPaises = ["Afeganistão", "Africa Do Sul", "Albania", "Alemanha", "Andorra", "Angola",
    "Anguilla", "Antarctica", "Antigua E Barbuda", "Antilhas Holandesas", "Arabia Saudita",
    "Argélia", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijão",
    "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Belarus (Bielorussia)", "Bélgica",
    "Belize", "Benin", "Bermuda", "Bolivia", "Bosnia-Herzegovina", "Botswana", "Brasil",
    "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Butão", "Cabo Verde",
    "Camarões", "Camboja", "Canada", "Catar", "Cazaquistão", "Chade", "Chile", "China",
    "Chipre", "Colombia", "Comores", "Congo", "Congo (Republica Democrática)",
    "Coreia Do Norte", "Coreia Do Sul", "Costa Do Marfim", "Costa Rica", "Croácia", "Cuba",
    "Dinamarca", "Djibuti", "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos",
    "Equador", "Eritreia", "Eslovaquia", "Eslovenia", "Espanha",
    "Estados Unidos Da America", "Estonia", "Etiópia", "Filipinas", "Finlândia", "França",
    "Franca Metropolitana", "Gabão", "Gambia", "Gana", "Georgia", "Gibraltar", "Granada",
    "Grécia", "Groenlândia", "Guadalupe", "Guam", "Guatemala", "Guiana", "Guiana Francesa",
    "Guine", "Guine Equatorial", "Guine-Bissau", "Haiti", "Holanda", "Honduras",
    "Hong Kong", "Hungria", "Iêmen", "Ilha Bouvet", "Ilha Christmas", "Ilha Norfolk",
    "Ilhas Cayman", "Ilhas Cocos (Keeling)", "Ilhas Cook", "Ilhas De Guernsey",
    "Ilhas De Jersey", "Ilhas Faroe", "Ilhas Fiji", "Ilhas Georgia Sul Sandwich Sul",
    "Ilhas Heard E McDonald", "Ilhas Malvinas (Falkland)", "Ilhas Mariana",
    "Ilhas Marshall", "Ilhas Menores Distantes Dos Eua", "Ilhas Pitcairn", "Ilhas Salomão",
    "Ilhas Svalbard E Jan Mayen", "Ilhas Turks E Caicos", "Ilhas Virgens Americanas",
    "Ilhas Virgens Britânicas", "Ilhas Wallis E Futuna", "India", "Indonesia", "Ira",
    "Iraque", "Irlanda", "Islândia", "Israel", "Italia", "Iugoslávia", "Jamaica", "Japão",
    "Jordânia", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", "Liberia",
    "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", "Macau", "Macedonia", "Madagascar",
    "Malásia", "Malawi", "Maldivas", "Mali", "Malta", "Marrocos", "Martinica", "Mauricio",
    "Mauritania", "Mayotte", "Mexico", "Micronesia", "Moçambique", "Moldova", "Monaco",
    "Mongolia", "Montserrat", "Myanmar", "Namibia", "Nauru", "Nepal", "Nicaragua", "Niger",
    "Nigeria", "Niue", "Noruega", "Nova Caledonia", "Nova Zelândia", "Oma", "Palau",
    "Panama", "Papua Nova Guine", "Paquistão", "Paraguai", "Peru", "Polinésia Francesa",
    "Polônia", "Porto Rico", "Portugal", "Quênia", "Quirguistão",
    "Reino Unido (Grã-Bretanha)", "Republica Centro-Africana", "Republica Dominicana",
    "Republica Tcheca", "Reunião", "Romênia", "Ruanda", "Russia", "Saara Ocidental",
    "Samoa", "Samoa Americana", "San Marino", "Santa Helena", "Santa Lucia",
    "Sao Cristóvão E Nevis", "Sao Pedro E Miquelon", "Sao Tome E Principe",
    "Sao Vicente E Granadinas", "Seicheles", "Senegal", "Serra Leoa", "Servia E Montenegro",
    "Singapura", "Síria", "Somalia", "Sri Lanka", "Suazilândia", "Sudão", "Suécia", "Suíça",
    "Suriname", "Tajiquistão", "Tailândia", "Taiwan", "Tanzania",
    "Território Britânico Do Oceano Indico", "Território Palestino Ocupado",
    "Territórios Franceses Do Sul", "Timor Leste", "Togo", "Tokelau", "Tonga",
    "Trinidad E Tobago", "Tunisia", "Turcomenistão", "Turquia", "Tuvalu", "Ucrânia",
    "Uganda", "Uruguai", "Uzbequistão", "Vanuatu", "Vaticano", "Venezuela", "Vietnã",
    "Zambia", "Zimbabwe"
];

$('.vn-calendar').dcalendarpicker({
    format: 'dd/mm/yyyy'
});

function changeWeeks() {
    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    $('.calendar-labels').each(function () {
        let week = $(this).find("span");
        for (i = 0; i < week.length; i++) {
            $(week[i]).text(weekdays[i]);
        }
    })
}

function ajustaAlturaMain() {
    let rodapeH = $('.vn-footer').height(),
        topoH = $('.vn-header').height(),
        totalRemove = topoH + rodapeH,
        windowH = $(window).innerHeight();
    $('main').css("min-height", windowH - totalRemove);
}

$(window).resize(function () {
    ajustaAlturaMain();
});

autocomplete(document.querySelector("#passagensAereas-origem"), listaPaises);
autocomplete(document.querySelector("#passagensAereas-destino"), listaPaises);

$(document).ready(function () {

    changeWeeks();
    ajustaAlturaMain();

})