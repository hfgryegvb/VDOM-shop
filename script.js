const items = [
    {
      title: "Короб для хранения",
      description: "Для хранения вещей",
      tags: ["man", "woman"],
      price: 20,
      img: "./img/короб для хранения.jpg",
      rating: 2.3,
    },
    {
      title: "Дозатор для жидкого мыла",
      description: "Для мыла",
      tags: ["man", "woman"],
      price: 15,
      img:"./img/1.jpg" ,
      rating: 4.5,
    },
    {
      title: "Кофр для хранения вещей",
      description: "Для вещей",
      tags: ["man", "woman"],
      price: 30,
      img: "./img/кофр для хранения вещей.jpg",
      rating: 4.6,
    },
    {
      title: "Набор для ванны",
      description: "Для ванны",
      tags: ["man", "woman"],
      price: 50,
      img: "./img/набор для ванны.jpg",
      rating:3.4 ,
    },
    {
      title: "Набор салфеток",
      description: "Для сухой уборки",
      tags: ["man", "woman"],
      price: 10,
      img: "./img/набор салфеток.jpg",
      rating: 3.6,
    },
    {
      title: "Органайзер",
      description: "Органайзер для хранения вещей",
      tags: ["man", "woman"],
      price: 35 ,
      img: "./img/органайзер.jpg",
      rating: 3.2,
    },
    {
      title: "Перчатки виниловые",
      description: "Перчатки для уборки",
      tags: ["man", "woman"],
      price: 5,
      img: "./img/перчатки виниловые.jpg",
      rating: 2.5,
    },
    {
      title: "Подставка для ватных дисков",
      description: "Для ватных дисков",
      tags: ["man", "woman"],
      price: 30,
      img:  "./img/подставка для ватных дисков.jpg",
      rating: 3.8,
    },
    {
      title: "Скребок для чистки одежды",
      description: "Для чистки одежды",
      tags: ["man", "woman"],
      price: 15,
      img: "./img/скребок для чистки одежды.jpg",
      rating: 4.6,
    },
    {
      title: "Сумка изотермическая",
      description: "Сумка",
      tags: ["man", "woman"],
      price: 25,
      img: "./img/сумка изотермическая.jpg",
      rating: 3.9,
    },
    {
      title: "Швабра",
      description: "Швабра для мытья полов",
      tags: ["man", "woman"],
      price: 40,
      img: "./img/швабра.jpg",
      rating: 4.8,
    },
    {
      title: "Шторка для ванной",
      description: "Шторка для ванной",
      tags: ["man", "woman"],
      price: 10,
      img: "./img/шторка для ванной.jpg",
      rating: 4.5,
    },
  ];
  
  
  
  let copyItems = [...items];

  
  const itemsContainer = document.querySelector("#shop-items");
  const itemTemplate = document.querySelector("#item-template");
  const nothingFound = document.querySelector("#nothing-found");
  
   
   function paintItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
      itemsContainer.append(createItem(item));
  });
    if (!arr.length) {
      nothingFound.textContent = "Ничего не найдено";
    }
  }
  
  function createItem(shopItem) {
    const { title, description, tags, img, price, rating } = shopItem;
    
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}BYN`;
    
  
   const ratingContainer = item.querySelector(".rating");
   for (let i = 0; i < rating; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star");
    ratingContainer.append(star);
  }
    
   const tagsHolder = item.querySelector(".tags");
    
   tags.forEach((tag) => {
    const element = document.createElement("span");
    element.textContent = tag;
    element.classList.add("tag");
    tagsHolder.append(element);
  });
    return item;
  }
  
  
   function sortAlphabet(a, b) {
    if (a.title > b.title) {
      return 1;
  }
    if (a.title < b.title) {
      return -1;
  }
      return 0;
  }
  
   paintItems(copyItems.sort((a, b) => sortAlphabet(a, b)));
  
  
   const searchInput = document.querySelector("#search-input");
   const searchButton = document.querySelector("#search-button");
  
  
   function applySearch() {
    const searchLine = searchInput.value.trim().toLowerCase();
    copyItems = items.filter((el) =>
    el.title.toLowerCase().includes(searchLine)
  );
    copyItems.sort((a, b) => sortAlphabet(a, b));
    paintItems(copyItems);
  
    sort.selectedIndex = 0;
  }
  
   searchButton.addEventListener("click", applySearch);
   searchInput.addEventListener("search", applySearch);
  
   const sort = document.querySelector("#sort");
   
   sort.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case "expensive": {
        copyItems.sort((a, b) => b.price - a.price);
        break;
      }
      case "cheap": {
        copyItems.sort((a, b) => a.price - b.price);
        break;
      }
      case "rating": {
        copyItems.sort((a, b) => b.rating - a.rating);
        break;
      }
      case "alphabet": {
        copyItems.sort((a, b) => sortAlphabet(a, b));
        break;
      }
    }
  
    paintItems(copyItems);
  });
