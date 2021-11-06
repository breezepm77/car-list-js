const elForm = document.getElementById('form');
const elInput = document.getElementById('input');

const data = [
    {
        imgUrl: 'https://cdn.motor1.com/images/mgl/KNy0G/s1/4x3/refreshed-tesla-model-x.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
    {
        imgUrl: 'https://cdn.motor1.com/images/mgl/JJkkA/s3/2022-toyota-corolla-cross-jdm.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
    {
        imgUrl: 'https://cdn.motor1.com/images/mgl/6JRgr/s1/bmw-vision-m-next-concept.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
    {
        imgUrl: 'https://cdn.motor1.com/images/mgl/1Xwn9/s1/4x3/bugatti-chiron-divo.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
];

data.forEach((data) =>{
    let newLi = document.createElement('li');
    let title = document.createElement('h2');
    let url = document.createElement('img');
    let desc = document.createElement('p');

    title.textContent = data.title;
    desc.textContent = data.description;
    url.setAttribute('src', data.imgUrl)
    newLi.setAttribute('class', 'box')
    img.setAttribute('class', 'qator-2')
    

    newLi.appendChild(url)
    newLi.appendChild(title)
    newLi.appendChild(desc)


    list.appendChild(newLi)
})

