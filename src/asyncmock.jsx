const products =[
    {
        id: '1' , 
        name: 'Campera Gucci', 
        price: 12000 ,
        img: '../img/campera_gucci.jpg',
        stock: 25, 
        description: 'Campera Gucci',
        category: 'campera'
    },
    {
        id: '2' , 
        name: 'Campera Supreme' , 
        price: 17000 ,
        img: '../img/campera_supreme.jpg',
        stock: 25, 
        description: 'Campera Supreme edicion limitada',
        category: 'campera'

    },
    {
        id: '3' , 
        name: 'Remera Gucci x The Nortn Face' , 
        price: 7000 ,
        img: '../img/remera_gucci_the.jpg',
        stock: 25,
        description: 'Remera Gucci colaboracion The North Face',
        category: 'remera'

    },
    {
        id: '4' , 
        name: 'Remera Gucci' , 
        price: 1200 ,
        img: '../img/remera_gucci.jpg' ,
        stock: 25, 
        description: 'Remera Gucci Importada',
        category: 'remera'

    },
    {
        id: '5', 
        name: 'Remera Supreme' , 
        price: 7500 ,
        img: '../img/remera_supreme.jpg',
        stock: 25, 
        description: 'Remera Supreme Importada',
        category: 'remera'

    },

    {
        id: '6', 
        name: 'Jordan 1 retro Dior' , 
        price: 23000 ,
        img: '../img/jorda_retro_dior.jpg',
        stock: 25, 
        description: 'Jorda colaboracion con Dior',
        category: 'shoes'

    },

    {
        id: '7', 
        name: 'Jordan 1 Air Retro' , 
        price: 120000 ,
        img: '../img/jordan_air_retro.jpg',
        stock: 25, 
        description: 'Jordan air retro',
        category: 'shoes'

    },

    {
        id: '8', 
        name: 'Jordan low purple' , 
        price: 12200 ,
        img: '../img/jordan_low_purple.jpg',
        stock: 25, 
        description: 'Jordan Low Purple',
        category: 'shoes'

    },

    {
        id: '9', 
        name: 'Remera the north face' , 
        price: 27800 ,
        img: '../img/the_north.jpg',
        stock: 25, 
        description: 'Remera importada The North Face',
        category: 'remera'
    },
]

   

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        } ,500)
    })   
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products.find(prod=> prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === category))
      }, 500)
    })
  }
  