
// https://swapi.dev/api/people/1/

// axios.get('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log('Axios:', res)
//     })

// const getStarWarsPerson = async () => {
//     const res = await axios.get('https://swapi.dev/api/people/1/')
//     console.log('second API request with Axios', res.data)
// }

// const jokesList = document.querySelector('#jokes')
// const jokeBtnEle = document.querySelector('#jokeBtn')

// const dadJokes = async () => {
//     const config = { headers: { "Accept": "application/json" } }
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(res.data.joke)

//     return res.data.joke;
// }


// jokeBtnEle.addEventListener('click', async () => {
//     const jokeData = await dadJokes();
//     jokesList.innerHTML += `<li>${jokeData}</li>`
// })

const searchBtnEle = document.querySelector('.searchBtn')
const formEle = document.querySelector('.form');
const showInputEle = document.querySelector('.show-input');
const showSectionEle = document.querySelector('.show-section');


formEle.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userSearch = showInputEle.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearch}`)

    if (showSectionEle.children[0]) {
        showSectionEle.innerHTML = '';
    } if (!showSectionEle.children[0]) {
        makeImg(res.data)
    }

    showInputEle.value = '';
    console.log(res.data)
})

const makeImg = (data) => {
    data.map(item => {
        return showSectionEle.innerHTML += `
        <div class='img-container'>
            <img class='img' src="${item.show.image.medium}">
            <div class="show-information">
                <div class="show-info">
                    <h3>${item.show.name}</h3>
                    <span>(Rating: ${item.show.rating.average})</span>
                </div>
                <li>${item.show.summary}</li>
            </div>
        </div>
    `
    })

}


// axios.get('https://api.tvmaze.com/search/shows?q=girls')
//     .then(function (res) {
//         console.log(res.data)
//     })







// formEle.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const showType = formEle.elements.query.value;
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${showType}`)
//     makeImg(res.data)

//     showInputEle.value = "";

// })

// const makeImg = (data) => {
//     data.map(item => {
//         document.querySelector('.show-section').innerHTML += `
//         <img src="${item.show.image.medium}">
//     `
//     })
// }

