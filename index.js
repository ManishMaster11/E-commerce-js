const buttons = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const URL = "https://fakestoreapi.com/products/";

// const apiData = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   //   console.log(data);
//   return data;
// };

//  apiData();
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const filData = data.filter((filterData) => {
          const category = filterData.category;
          const selectedCategory = e.target.innerText.toLowerCase();

          if (selectedCategory !== "all") {
            return category.indexOf(selectedCategory) > -1;
          } else {
            return filterData;
          }
        });

        // console.log(filData);

        let recipe = "";
        filData.map((finalData) => {
          recipe += `<div class="item">
                <div class="title">
                    <span>${finalData.title}</span>
                </div>
                <div class="image">
                    <img src=${finalData.image} alt="image">
                </div>
                <div class="discription">
                    <p> ${finalData.description}</p>
                </div>
                <div class="category">
                    <span>${finalData.category}</span>
                </div>
                <div class="price">
                    <span>${finalData.price}</span>
                </div>
            </div>`;
        });

        container.innerHTML = recipe;
      });
    console.log(e.target.innerText);
  });
});
