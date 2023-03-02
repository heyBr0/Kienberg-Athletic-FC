import connect from "../mongoClient";

export default function MyComponent({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div>
          <div key={item._id}>
            {item.fname} <soan> </soan> {item.lname} <soan> </soan> {item.goals}
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const db = await connect();
  const collection = db.collection("players");
  const data = await collection.find().toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
