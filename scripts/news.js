// fetch data from category menu

const fetchCategoryData = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => showTheData(data.data));
};

//show the data in dynamicallly HTML

const showTheData = (item) => {
  //select the HTML ID
  let categoryArea = document.getElementById("category-area");
  item.news_category.forEach((category) => {
    let linkCon = document.createElement("p");

    linkCon.innerHTML = `
      <a class="nav-link" onclick = "getCategoryData('${category.category_id}','${category.category_name}')" href="#">${category.category_name}</a>
      `;
    categoryArea.appendChild(linkCon);
  });
};

//get all catogories data from fetch

const getCategoryData = (category_id, category_name) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCategoryNews(data.data, category_name));
};

//show all category News

const showCategoryNews = (data, category_name) => {
  document.getElementById("news-count").innerText = data.length;
  document.getElementById("news-name").innerText = category_name;
  let allNews = document.getElementById("all-news");

  //remove all of cart when clickable cart append
  allNews.innerHTML = "";

  data.forEach((element) => {
    let newElement = document.createElement("div");
    newElement.classList.add("card", "mb-3");
    newElement.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4 px-3 py-3">
            <img src="${
              element.thumbnail_url
            }" class="img-fluid W-75 rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body mt-3">
              <h5 class="card-title ">${element.title}</h5>
              <p class="card-text">${element.details.slice(0, 150)}</p>
              
            </div>

            <div class = "card-footer border-o bg-body d-flex justify-content-between">
            <div class = "d-flex gap-3">
            <img src="${
              element.author.img
            }" class="  rounded-circle" alt="..." height ="50" width = "50">
            <div>
            <p class="m-0 p-0">${element.author.name}</p>
            <p class="m-0 p-0">${element.author.published_date}</p>
            </div>
            </div>

            <div class = "d-flex gap-3">
            <i class="fa-solid fa-eye"></i>
                <p class ="m-0 p-0">${element.total_view}</p>
            </div>
            <div>
            <i class="fa-solid fa-star"></i>
            </div>
            <div>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
            </div>
          </div>
        </div>
        
        
        `;

    allNews.appendChild(newElement);

    console.log(element);
  });
};
