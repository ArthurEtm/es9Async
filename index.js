const urls =[
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/starships/9/',
    'https://swapi.dev/api/planets/3/'
]

const getData = async function(){
const arrayOfPromises = urls.map(url=> fetch(url));
for await (let request of arrayOfPromises){
    const data = await request.json();
    console.log(data)
}
}