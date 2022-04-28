const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kdud3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const productCollection = client.db("ema-jhon").collection("product");
    app.get("/product", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });

    app.get('/productCount', async(req,res)=>{
      const query = {}
      const cursor = productCollection.find(query)
      const pages = await cursor.count()
      res.send({pages})
    })
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Jhon bro is waiting for ema bby");
});

app.listen(port, () => {
  console.log("Jhon is waiting on port", port);
});
