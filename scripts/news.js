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
  console.log(data, category_name);
};
