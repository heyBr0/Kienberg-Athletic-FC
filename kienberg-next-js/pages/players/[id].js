import { ObjectId } from "mongodb";
import connect from "../../mongoClient";
import Image from "next/image";

export async function getServerSideProps(context) {
  const db = await connect();
  const { id } = context.query;
  const collection = db.collection("players");
  const player = await collection.findOne({ _id: new ObjectId(id) });

  return {
    props: {
      player: JSON.parse(JSON.stringify(player)),
    },
  };
}

export default function PlayerDetails({ player }) {
  return (
    <div>
      <h1>
        {player.fname} {player.lname}
      </h1>
      <p>Goals: {player.goals}</p>
      <img src={player.image} alt={`${player.fname} ${player.lname}`} />
    </div>
  );
}

