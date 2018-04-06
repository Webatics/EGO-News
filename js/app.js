// UI Variables
const generalNews = document.getElementById('generalNews');
const business = document.getElementById('business');
const entertainment = document.getElementById('entertainment');
const health = document.getElementById('health');
const science = document.getElementById('science');
const sports = document.getElementById('sports');
const technology = document.getElementById('technology');

// Load Headlines on page load
function loadData() {
    const key = 'c0245be5b45440d8944b52eb9f7c0e48';
    let output = '';
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${key}`)
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {
		const newsData = data.articles;
		newsData.forEach((news) => {
			output += `
				<div class="col-md-4">
					<div class="card card-body mb-2">
						<span class="badge badge-success float=left py-2">News Sorce: <strong>${news.source.name}</strong></span>
						<img src="${news.urlToImage}" class="img-fluid mb-2" id="newsImage" width="100%" height="150">
                        <h5 class="card-title"><a href="${news.url}" target="_blank">${news.title}</a></h5>
                        <a href="${news.url}" target="_blank" class="btn btn-success btn-xs">Read News</a>
					</div>
				</div>
			`;
		});
		// Output the news
		document.getElementById('headlines').innerHTML = output;
	})
	.catch(function(err) {
		console.log(err);
	});
}



// SideNav JavaScript
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("egoSidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("egoSidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}