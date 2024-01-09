let searchBox = document.getElementById("search-box");
let inputs = document.getElementById("inputs");
let searchBtn = document.getElementById("search-btn");
let searchResult = document.getElementById("search-result");
let showbtn = document.getElementById("show-result");



let accessKey = "ervfwreDfsxJ0LlZjwpefTiyRmOjdtge2UtSuL6FRvc";
let keyword = ''
let page = 1;

async function searchImage() {
  keyword = inputs.value;
  let url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const respons = await fetch(url);
    const data = await respons.json();
    
    if (page === 1) {
        searchResult.innerHTML = " "
    }

  const results = data.results;

  results.map((result) => {
      const img = document.createElement("img")
      img.src = result.cover_photo.urls.small;
      const imgLink = document.createElement("a")
      imgLink.href = result.cover_photo.links.html;
      imgLink.target = "_blank"
      imgLink.appendChild(img)
      searchResult.appendChild(imgLink)
  })
    showbtn.style.display = "block" 

}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1
    searchImage()
})


showbtn.addEventListener("click", () => {
    page++;
    searchImage()
})
