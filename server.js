const { MongoClient } = require("mongodb");
const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectdb() {
  await client.connect();
  const db = client.db("dns");
  const records = db.collection("records");
  return records;
}

server.on("message", async (msg, rinfo) => {
  const domain = msg.toString().trim();
  const records = await connectdb();
  const record = await records.findOne({ domain });
  const ip = record ? record.ip : "Not Found";
  server.send(ip, rinfo.port, rinfo.address);
});

server.bind(12345);
