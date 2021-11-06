const elForm = document.getElementById('form');
const elInput = document.getElementById('input');

const data = [
    {
        imgSrc: 'https://cdn.motor1.com/images/mgl/ZYv1y/s3/lamborghini-sc18.webp',
        imgUrl: 'https://cdn.motor1.com/images/mgl/KNy0G/s1/4x3/refreshed-tesla-model-x.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
    {
        imgSrc: 'https://cdn.motor1.com/images/mgl/LpLBj/s1/4x3/2021-bmw-m5-facelift-rendering.webp',
        imgUrl: 'https://cdn.motor1.com/images/mgl/JJkkA/s3/2022-toyota-corolla-cross-jdm.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
    {
        imgSrc: 'https://cdn.motor1.com/images/mgl/7OqjV/s1/mercedes-c-klasse-limousine-2021.webp',
        imgUrl: 'https://cdn.motor1.com/images/mgl/6JRgr/s1/bmw-vision-m-next-concept.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
    {
        imgSrc: 'https://cdn.motor1.com/images/mgl/0x6J3/s1/ferrari-sf90-stradale.webp',
        imgUrl: 'https://cdn.motor1.com/images/mgl/1Xwn9/s1/4x3/bugatti-chiron-divo.webp',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex expedita reiciendis laudantium iusto! Explicabo quisquam nihil perspiciatis doloribus. Officia!'
    },
];

data.forEach((data) =>{
    let newLi = document.createElement('li');
    let title = document.createElement('h2');
    let img = document.createElement('img');
    let url = document.createElement('img');
    let desc = document.createElement('p');

    title.textContent = data.title;
    desc.textContent = data.description;
    img.setAttribute('src', data.imgSrc)
    url.setAttribute('src', data.imgUrl)
    newLi.setAttribute('class', 'box')
    img.setAttribute('class', 'qator-2')
    url.setAttribute('class',  'url')
    

    newLi.appendChild(url)
    newLi.appendChild(img)
    newLi.appendChild(title)
    newLi.appendChild(desc)


    list.appendChild(newLi)
})

