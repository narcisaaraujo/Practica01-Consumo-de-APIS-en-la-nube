var data;
function getrespuesta(q){
    $.get("http://www.omdbapi.com/?s="+q+"&apikey=ac0d05f3", function(rawdata){
        var rawstring=JSON.stringify(rawdata);
        data=JSON.parse(rawstring)
        var titulo=data.Search[0].Title;
        var year=data.Search[0].Year;
        var imdburl= "https://www.imdb.com/title/"+data.Search[0].imdbID+"/";
        var posterurl = data.Search[0].Poster;
        document.getElementById("respuesta").innerHTML="<h1>"+titulo+"</h1><br><img src='"+posterurl +"'/><br><p>A&ntilde;o : "+year+"</p><br><p>Enlace Pelicula: <a href='"+ imdburl+"' target='_blank'>"+imdburl+"</a></p>";
    });
}