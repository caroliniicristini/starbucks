const listItems = [
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/n/e/nespresso_house_blend.png',
        name: 'Starbucks® House Blend by Nespresso® - 10 cápsulas',
        price: 26.99,
        type: 'action figure'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/2/0/20_6200691_nespresso_espresso_roast.png',
        name: 'Starbucks® Espresso Roast by Nespresso® - 10 cápsulas',
        price:  26.99,
        type: 'frame'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/1/9/19_6200591_nespresso_colombia.png',
        name: 'Starbucks® Single-Origin Colombia by Nespresso® - 10 cápsulas',
        price:  26.99,
        type: 'frame'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/2/1/21_6200791_nespresso_blond_roast.png',
        name: 'Starbucks® Blonde Espresso Roast by Nespresso® - 10 cápsulas',
        price:  26.99,
        type: 'action figure'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/g/u/guatemalamagento_1_.png',
        name: 'Starbucks® Single-Origin Guatemala by Nespresso® - 10 cápsulas',
        price: 26.99,
        type: 'frame'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/c/a/caramel.png',
        name: 'Starbucks® Smooth Caramel by Nespresso® - 10 cápsulas',
        price: 26.99,
        type: 'action figure'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/1/7/17_6200291_nespresso_caffe_verona.png',
        name: 'Starbucks® Caffè Verona™ by Nespresso® - 10 cápsulas',
        price: 24.00,
        type: 'frame'
    },
    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/s/t/starbucks-tnlatte-nespresso.png',
        name: 'Starbucks® Toffee Nut by Nespresso® - 10 cápsulas',
        price: 25.00,
        type: 'frame'
    },

    {
        image: 'https://www.starbucksathome.com/br/media/catalog/product/cache/9c4f60e3b2852ffaef00687769c4dc27/g/u/guatemalamagento_1_.png',
        name: 'Starbucks® Single-Origin Guatemala by Nespresso® - 10 cápsulas',
        price: 26.99,
        type: 'frame'
    },
];


const contentFigure = document.querySelector('.figure')
const contentFrame = document.querySelector('.frame')


function separateItens(items){
    for(let i=0; i < items.length; i++){
        const item = items[i];
        
        if(item.type === 'action figure'){
            criarLista([item], contentFigure);

        } else if(item.type === 'frame'){
            criarLista([item], contentFrame);
        }
    }
}

function criarLista(itens, section){

    for(let i=0; i < itens.length; i++){
        const item = itens[i];

        const lista = document.createElement('li');
        const img = document.createElement('img');
        const nome = document.createElement('span');
        const preco = document.createElement('p');
      
        img.src = item.image; 
        nome.innerHTML = item.name;
        preco.innerHTML = `R$ ${item.price.toFixed(2)}`;
        lista.classList.add('containerList')

        lista.appendChild(img);
        lista.appendChild(nome)
        lista.appendChild(preco)
        section.appendChild(lista);
    }
}
separateItens(listItems)