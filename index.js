const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://SmartDealsDBUser:5EpmhAEZjpCE1gWm@anothersimplecrudprojec.sly0hz6.mongodb.net/?appName=AnotherSImpleCRUDProject";
  

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });


// 5EpmhAEZjpCE1gWm

    

app.get("/", (req, res) => {
  res.send("Hello World! : Smart Deals Server is Running Here!");
});



async function run() {
  try {
    await client.connect();

    const db = client.db("smart_db");

    const productsCollection = db.collection("products");

      app.post('/products', async(req, res) =>{
          const newProduct = req.body;
          const result = await productsCollection.insertOne(newProduct)
          res.send(result)
      })
      
      app.delete('/products/:id', (req, res) => {
          const id = req.params.id;
          
      })
      
    // Send a ping to confirm a successful connection

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, () => {
  console.log(`Smart Deals Server is listening on port ${port}`);
});
