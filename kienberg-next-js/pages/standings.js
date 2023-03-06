import { Table } from "react-bootstrap";
import Image from "next/image";
import teamALogo from "../public/Clubs/SC-Charlottenburg.png";
import teamBLogo from "../public/Clubs/TSV-Mariendorf-1897.png";
import teamCLogo from "../public/Clubs/TSV-Rudow.png";
import teamDLogo from "../public/Clubs/Kienberg.png";
import teamELogo from "../public/Clubs/BSC-Preussen.png";
import teamFLogo from "../public/Clubs/Füchse-Reinickendorf.png";
import teamGLogo from "../public/Clubs/SD-Croatia.png";
import teamHLogo from "../public/Clubs/Berliner-Sport-Club.png";
import teamILogo from "../public/Clubs/Sparta-Lichtenberg.png";
import teamJLogo from "../public/Clubs/SFC-Stern1990.png";
import teamKLogo from "../public/Clubs/1.FC-Wilmersdorf.png";
import teamLLogo from "../public/Clubs/SpandauerKickers.png";

const Standings = () => {
  const rows = [
    {
      team: "SC Charlottenburg",
      mp: 10,
      w: 5,
      d: 3,
      l: 2,
      gf: 15,
      ga: 8,
      gd: 7,
      pts: 18,
      logo: teamALogo,
    },
    {
      team: "Mariendorf 1897",
      mp: 10,
      w: 4,
      d: 3,
      l: 3,
      gf: 12,
      ga: 11,
      gd: 1,
      pts: 15,
      logo: teamBLogo,
    },
    {
      team: "TSV Rudow",
      mp: 10,
      w: 4,
      d: 3,
      l: 3,
      gf: 10,
      ga: 9,
      gd: 1,
      pts: 15,
      logo: teamCLogo,
    },

    {
      team: "Kienberg",
      mp: 10,
      w: 3,
      d: 5,
      l: 2,
      gf: 13,
      ga: 10,
      gd: 3,
      pts: 14,
      logo: teamDLogo,
    },

    {
      team: "BSC Preussen",
      mp: 10,
      w: 4,
      d: 2,
      l: 4,
      gf: 14,
      ga: 12,
      gd: 2,
      pts: 14,
      logo: teamELogo,
    },
    {
      team: "Füchse Reinickendorf",
      mp: 10,
      w: 3,
      d: 4,
      l: 3,
      gf: 10,
      ga: 10,
      gd: 0,
      pts: 13,
      logo: teamFLogo,
    },
    {
      team: "SD Croatia",
      mp: 10,
      w: 2,
      d: 6,
      l: 2,
      gf: 9,
      ga: 8,
      gd: 1,
      pts: 12,
      logo: teamGLogo,
    },
    {
      team: "Berliner Sport Club",
      mp: 10,
      w: 2,
      d: 6,
      l: 2,
      gf: 8,
      ga: 8,
      gd: 0,
      pts: 12,
      logo: teamHLogo,
    },
    {
      team: "Sparta Lichtenberg",
      mp: 10,
      w: 3,
      d: 3,
      l: 4,
      gf: 11,
      ga: 12,
      gd: -1,
      pts: 12,
      logo: teamILogo,
    },
    {
      team: "SFC Stern 1990",
      mp: 10,
      w: 3,
      d: 2,
      l: 5,
      gf: 12,
      ga: 14,
      gd: -2,
      pts: 11,
      logo: teamJLogo,
    },
    {
      team: "1.FC-Wilmersdorf",
      mp: 10,
      w: 2,
      d: 5,
      l: 3,
      gf: 8,
      ga: 10,
      gd: -2,
      pts: 11,
      logo: teamKLogo,
    },
    {
      team: "Spandauer Kickers",
      mp: 10,
      w: 1,
      d: 5,
      l: 4,
      gf: 4,
      ga: 10,
      gd: -6,
      pts: 8,
      logo: teamLLogo,
    },
  ];

  return (
    <div className="h-screen pt-12 flex justify-center align-middle">

  
    <Table>
      <thead>
        <tr className="pl-8 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
          <th className="ml-2 pl-8 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            Logo
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            Team
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            MP
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            W
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            D
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            L
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            GF
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            GA
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            GD
          </th>
          <th className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
            PTS
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.slice(0, 18).map((row, index) => (
          <tr key={index}>
            <td className="ml-2 pl-8 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              <Image src={row.logo} alt={row.team} width={50} height={50} />
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.team}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.mp}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.w}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.d}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.l}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.gf}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.ga}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.gd}
            </td>
            <td className="pl-1 pr-1 pt-1 pb-1 md:pl-8 md:pr-8 md:pt-1 md:pb-1">
              {row.pts}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default Standings;
