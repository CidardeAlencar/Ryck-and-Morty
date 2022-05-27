

const productlist =[
    {
        id:1,
        name:'Ipod touch',
        price: '99.99',
        weight: '128g',
        description: 'jsjsjsjssjsjsjsjsjsj'
    },
    {
        id:1,
        name:faker.name.title(),
        price: faker.datatype(1000),
        weight: faker.datatype.number(500),
        description: fake.lorem.paragraph(),
        image: faker.internet.url()
    },
    
]

export {productlist}