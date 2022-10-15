const bredurl = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breednames');

fetch(bredurl)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsobj = data.message;
    const arr = Object.keys(breedsobj);
    for (let i = 0; i < arr.length; i++) {
      const option = document.createElement('option');
      option.value = arr[i];
      option.innerText = arr[i];
      select.appendChild(option);
    }
    console.log(arr);
  });

select.addEventListener('change', event => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDoggo(url);
});

const imgs = document.querySelector('.imgs');
const dog = document.querySelector('.dog');

const getDoggo = url => {
  dog.classList.add('display');
  imgs.classList.remove('display');
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      imgs.src = data.message;
    });
};

imgs.addEventListener('load', () => {
  dog.classList.remove('display');
  imgs.classList.add('display');
});