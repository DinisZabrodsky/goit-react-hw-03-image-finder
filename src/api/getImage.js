
const BASE_URL = "https://pixabay.com/api/"
const PUBLIC_KEY = "35076300-d9ed172566d5e47728ad50c8a"

export  function getImage ({query, page = 1}) {
    return fetch(`${BASE_URL}?q=${query}&page=${page}&key=${PUBLIC_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json())
   
  
}
