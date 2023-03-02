import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  await client.connect();  
  console.log("connected to DB");
  return client.db(process.env.MONGODB_DB);
}

export default connect;

