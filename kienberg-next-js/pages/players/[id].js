import { ObjectId } from "mongodb";
import connect from "../../mongoClient";
import Link from "next/link";

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
    <div className="ml-2  mt-2 mb-2 flex w-4/5 pt-2 pb-2 sm:flex-row tallscreen:flex-col">
      <h1 className="mt-2 mb-2 pt-2 pb-2 text-3xl">
        <Link href="/players" className="pr-4">
          <button className="w-12 text-5xl hover:text-[#A0DD9F]">&#x2190;</button>
        </Link>
        {player.fname} {player.lname}
      </h1>
      {player.role === "goalkeeper" && (
        <div className="mt-12 mb-12 flex flex-col pt-12 pb-12">
          <img src={player.image} alt={`${player.fname} ${player.lname}`} />
          <section className="ml-4 mt-8 mb-8 flex flex-col pt-8 pb-8 text-2xl gap-1">
            <p>Role: {player.role}</p>
            <p>Apps: {player.apps}</p>
            <p>Clean sheets: {player.cleanSheet}</p>
            <p>Assists: {player.assists}</p>
            <p>Age: {player.age}</p>
          </section>
        </div>
      )}
      {player.role !== "goalkeeper" && (
        <div className="mt-12 mb-12 flex flex-col pt-12 pb-12">
          <img src={player.image} alt={`${player.fname} ${player.lname}`} />
          <section className="ml-4 mt-8 mb-8 flex flex-col pt-8 pb-8 text-2xl gap-1">
            <p>Role: {player.role}</p>
            <p>Apps: {player.apps}</p>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
            <p>Age: {player.age}</p>
          </section>
        </div>
      )}
    </div>
  );
}
