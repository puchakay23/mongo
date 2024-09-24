const mongoose = require('mongoose');

// const uri = "mongodb://127.0.0.1/shop";

const uri = "mongodb+srv://koushikrishi23:Rishi2304@cluster0.jkk3ekm.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri);

// we need to create a schema
const productSchema = new mongoose.Schema({
    name:String,
    company:String,
    price:Number,
    colors:[String],
    image:String,
    category:String,
    isFeatured:Boolean,
});

//need to create a model
const Product = new mongoose.model("product",productSchema)
const data1 = {
    name: 'Diamond Ring',
    company: '64c23350e32f4a51b19b923a',
    price: 2500,
    colors: [ '#000000', '#cc6600', '#663300' ],
    image: '/images/product-diamond-ring.png',
    category: '64c2342de32f4a51b19b9259',
    isFeatured: false
};

const main=async()=>{
    try {
        // const data = await Product.find({price:{$gt:1299}})
        // console.log(data);
        //insert data
        await Product.insertMany(data1);
        const data = await Product.find({price:{$gt:2000}})
        console.log(data);

    } catch(error){
        console.log(error);
    } finally{
        mongoose.connection.close();
    }

};


main();


