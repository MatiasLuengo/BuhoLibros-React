const books = [{
    "id": 1,
    "title": "Bestiario",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Julio Cortázar",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Novelas",
        "subCategory": "Grandes Clasicos"
        },
    "image": "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/619061.jpg",
},
{
    "id": 2,
    "title": "It (Eso)",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Stephen King",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Novelas",
        "subCategory": "Terror"
        },
    "image": "https://prodimage.images-bn.com/pimages/9781501142970_p0_v3_s1200x630.jpg",
},
{
    "id": 3,
    "title": "Mr. Mercedes",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Stephen King",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Novelas",
        "subCategory": "Terror"
        },
    "image": "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/620567.jpg",
},
{
    "id": 4,
    "title": "El precio de la pasión",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Gabriel Rolón",
    "price": "1.500",
    "bestSeller": false,
    "category": {
        "title": "Salud y Bienestar",
        "subCategory": "Psicologia"
        },
    "image": "https://www.planetadelibros.com.ar/usuaris/libros/fotos/305/m_libros/portada_el-precio-de-la-pasion_gabriel-rolon_201909171737.jpg",
},
{
    "id": 5,
    "title": "La Comunidad del Anillo",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "J. R. R. Tolkien",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Novelas",
        "subCategory": "Aventura"
        },
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/318/183/products/d_nq_np_2x_705171-mla44960628516_022021-f1-c5132a2d2554029ec116143509568158-640-0.png",
},
{
    "id": 6,
    "title": "Las dos torres",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "J. R. R. Tolkien",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Novelas",
        "subCategory": "Aventura"
        },
    "image": "https://images.cdn2.buscalibre.com/fit-in/360x360/ac/e5/ace51368253c56d00b801f8bf5846cbe.jpg",
},
{
    "id": 7,
    "title": "La larga marcha",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Stephen King",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Novelas",
        "subCategory": "Terror"
    },
    "image": "https://covers.alibrate.com/b/59872ea1cba2bce50c1d821b/179583b4-78bf-4470-aeae-a65276d98ef3/share",
},
{
    "id": 8,
    "title": "El valle del terror",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Arthur Conan Doyle",
    "price": "1.500",
    "bestSeller": false,
    "category": {
        "title": "Novelas",
        "subCategory": "Policiales"
        },
    "image": "https://buenosaires.gob.ar/sites/default/files/media/image/2020/04/02/ac3f733c77a035c0729a7d867d2d8f82769f99ac.jpg",
},
{
    "id": 9,
    "title": "El libro de la selva",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Rudyard Kipling",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Infantiles",
        "subCategory": ""
        },
    "image": "https://resumen.club/wp-content/uploads/2021/12/el-libro-de-la-selva-resumen-700x992.jpg",
},
{
    "id": 10,
    "title": "La biblia del cuidado de tu hijo",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Richard Waterson",
    "price": "1.500",
    "bestSeller": false,
    "category": {
        "title": "Salud y Bienestar",
        "subCategory": "Familia y Crianza"
        },
    "image": "https://www.penguinlibros.com/ar/2125398-medium_default/la-biblia-del-cuidado-de-tu-hijo.jpg",
},
{
    "id": 11,
    "title": "El poder del ahora",
    "description": "Duis malesuada, quam at finibus scelerisque, justo sapien placerat massa, a malesuada sem mauris sit amet arcu. Praesent maximus nec risus eu consectetur. Nulla id dui nec est pharetra ornare. Nullam pretium tincidunt luctus",
    "author": "Eckhart Tolle",
    "price": "1.500",
    "bestSeller": true,
    "category": {
        "title": "Salud y Bienestar",
        "subCategory": "Espiritualidad"
        },
    "image": "https://dilalla.com.ar/wp-content/uploads/2021/05/9788484452065.jpg",
},
]

export const gets = {
    getBooks : () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(books)
            }, 2000);
        })
    },
    
    getBook : (itemId) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const book = books.find(obj => obj.id === parseInt(itemId))
                resolve(book)
            }, 2000);
        })
    },

    getCategoryBooks : (itemCategory) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const result = books.filter(obj => obj.category.title === itemCategory)
                resolve(result)
            }, 2000);
        })
    },
    
    getSubCategoryBooks : (category, itemSubCategory) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const result = books.filter(obj => obj.category.subCategory === itemSubCategory && obj.category.title === category)
                resolve(result)
            }, 2000);
        })
    },

    getBestSellersBooks : () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const result = books.filter(obj => obj.bestSeller === true)
                resolve(result)
            }, 2000);
        })
    }
}