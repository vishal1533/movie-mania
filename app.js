const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
		'X-RapidAPI-Key': '43f8a90cabmsh5bc924dca2074ffp163f6cjsn9262b5695017'
	}
};

fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
	.then(response => response.json())
	.then(response => myFunction(response))
	.catch(err => console.error(err));

function myFunction(e)
{
	e.results.sort(function(a,b){
		return b.imdbrating - a.imdbrating;
	});
	for(var i=0;i<e.results.length;i++)
	{
		let cont='<div class="card-details"><div class="name"><p class="label">MOVIE : </p><p class="movie-name">'+e.results[i].title+'</p></div><div class="rating"><p class="label">IMDB Rating : </p><p class="movie-rating">'+ e.results[i].imdbrating +'</p></div><div class="des"><p class="label">INFO:</p><p class="movie-des">'+e.results[i].synopsis+'</p></div></div>'
		const newdiv='<div class="img" style="background-image:url('+e.results[i].imageurl[0]+');"></div>';
		cont=cont+newdiv;
		const div= document.createElement("div");
		div.innerHTML=cont;
		div.classList.add("card");
		const target=document.getElementsByClassName("food-card")[0];
		target.insertBefore(div, document.getElementsByClassName("last")[0]);
	}

}
// function myFunction(e)
// {
//   const element='<img src="'+e.results[0].imageurl[0]+'" alt="random pic">';
//   const div= document.createElement("div");
//   div.innerHTML=element;
//   const tr=document.querySelectorAll(".food-name")[0];
//   tr.innerHTML=e.results[0].title;
//   tr.parentNode.insertBefore(div,tr);
//   document.querySelectorAll(".food-info")[0].textContent=e.results[0].synopsis;
//   document.querySelectorAll(".food-price")[0].textContent=e.results[0].imdbrating;
//   console.log(e.results[0])
//   console.log(e.results[0].synopsis)
// }
