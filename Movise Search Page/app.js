let form = document.querySelector('#form');
let imageContainer = document.createElement('DIV');
document.body.appendChild(imageContainer);

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let search = form.elements.q.value;
    let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
    clearImageConatiner();
    makeImages(res.data)

});

const clearImageConatiner = ()=>{
    while(imageContainer.firstChild){
        imageContainer.removeChild(imageContainer.firstChild)
    }
};

const makeImages = (res)=>{
   
    for(let result of res){
        if(result.show.image){
            let img = document.createElement('IMG');
            img.src = result.show.image.medium;
            imageContainer.appendChild(img);
        }
        
    }
}