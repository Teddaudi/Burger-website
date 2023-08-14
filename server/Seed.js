const MongoClient = require('mongodb').MongoClient;
const _ = require('lodash')
const data = require('./data')
const main = async()=>{
    const url ='mongodb://localhost:27017';
    const client = new MongoClient(url)

    try {
        await client.connect()
        const dishCollections = client.db('burger-shop').collection('dishes');
        let dishes = [];
        for(let i=0; i< data.length; i++){
            let newDishes = {
                id:ObjectId(),
                title:data.burgers.title,
                price:data.burgers.price,
                image:data.burgers.img
            }
            dishes.push(newDishes)
        }
        await dishCollections.insertMany(dishes)
    } catch (error) {
        console.log(error)
    }finally{
        await client.close()
    }

}
main();
