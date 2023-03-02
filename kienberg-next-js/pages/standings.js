import Head from "next/head";
import { Table } from "@nextui-org/react";
const Standings = ({ theme }) => {
  return (
    <article>
      <Head>
        <title>Kienberg | Standings</title>
        <meta name="keywords" content="players" />
      </Head>

      <div className="grid min-h-full place-content-center">
        <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
          Table 2022/2023
        </h2>
        <Table className="bg-white text-slate-900 dark:text-white">
          <Table.Header>
            <Table.Column>CLUB</Table.Column>
            <Table.Column>GAMES</Table.Column>
            <Table.Column>GOALS</Table.Column>
            <Table.Column>POINTS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </article>
  );
};

export default Standings;
