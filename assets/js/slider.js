var texts = [
    "Há muito tempo, em um reino distante chamado Ethoria, os sábios eram conhecidos por sua habilidade em conjurar magia ancestral, uma arte que combinava conhecimento arcano com ética e moralidade. No entanto, um grande dilema assolava os corações dos habitantes de Ethoria."
    ,
    "A sociedade de Ethoria era dividida em duas facções principais: os Puristas e os Progressistas. Os Puristas acreditavam na estrita adesão às tradições éticas ancestrais, enquanto os Progressistas defendiam a evolução das práticas éticas para se adaptarem aos tempos modernos."
    ,
    "A contenda entre essas facções tornou-se mais intensa quando uma crise ameaçou o reino. Uma força maligna, conhecida como a Sombra Eterna, começou a se espalhar, corrompendo a terra e ameaçando destruir tudo em seu caminho."
    ,
    "Os Puristas argumentavam que a única maneira de derrotar a Sombra Eterna era invocar os rituais ancestrais, que exigiam sacrifícios severos e o uso de magia proibida há muito tempo. Eles acreditavam que, ao seguir estritamente os ensinamentos éticos do passado, poderiam purificar a terra e salvar o reino."
    ,
    "Por outro lado, os Progressistas acreditavam que a resposta estava em adaptar as práticas éticas, incorporando novas formas de magia e explorando métodos menos ortodoxos. Eles argumentavam que, ao seguir cegamente os rituais do passado, o reino estaria preso em uma mentalidade antiquada que poderia levar à sua própria ruína."
];

    var actualSlide = 0;

let slider = document.getElementById("textSlider");

function updateSlider()
{
    if(actualSlide < 0) actualSlide = texts.length - 1;
    if(actualSlide >= texts.length) actualSlide = 0;
    slider.innerHTML = "<p>" + texts[actualSlide] + "</p>";
}

updateSlider();

let moveLeft = document.getElementById("moveLeft");
let moveRight = document.getElementById("moveRight");

moveLeft.onclick = function()
{
    actualSlide--;
    updateSlider();
};

moveRight.onclick = function()
{
    actualSlide++;
    updateSlider();
}
