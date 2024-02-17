let AlooParatha_count = 0;
let maggi_count = 0;
let chowmine_count = 0;
let coffee_count = 0;
let cone_count = 0;
let creamBar_count = 0;
let Tea_count = 0;
let vegroll_count = 0;

fetch('http://localhost:3030/items')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      AlooParatha_count = item.alooParatha;
      maggi_count = item.maggi;
      chowmine_count = item.chowmien;
      coffee_count = item.coffee;
      cone_count = item.cone;
      creamBar_count = item.creamBar;
      Tea_count = item.tea;
      vegroll_count = item.vegRoll;
    });
  })
  .catch(error => console.error('Error fetching data:', error));
