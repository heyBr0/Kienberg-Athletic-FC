
import React from 'react'

const Trophees = () => {
  return (
    <div>Trophees</div>
  )
}

export default Trophees






/* import connect from "../mongoClient";




export default function Trophees({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div>
          <div key={item._id}>
            {item.trophee} 
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const db = await connect();
  const collection = db.collection("trophees");
  const data = await collection.find().toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
 */