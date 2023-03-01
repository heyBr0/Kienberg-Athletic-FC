import Head from "next/head";
import { Table } from "@nextui-org/react";
const Standings = () => {
  return (
    <article>
      <Head>
        <title>Kienberg | Standings</title>
        <meta name="keywords" content="users" />
      </Head>

      <div
        className="dark:text-white grid min-h-full place-content-center
           text-slate-900"
      >
        <h2
          className="dark:text-white max-w-md text-center text-4xl font-bold text-slate-900
           sm:text-left sm:text-5xl"
        >
          Table 2022/2023
        </h2>
        <Table className="dark:text-white bg-white text-slate-900">
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
