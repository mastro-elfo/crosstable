import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableProps,
  TableRow,
} from "@mui/material";
import { ComponentProps, ReactNode } from "react";
import DiagonalCell from "../DiagonalCell/DiagonalCell";
import { ResultCell } from "../ResultCell";
import { TableHeadCell } from "../TableHeadCell";

type TeamEntity = { id: number | string };

type CrossTableProps<Team> = {
  diagonalProps?: Omit<ComponentProps<typeof DiagonalCell>, "children">;
  double?: boolean;
  getDiagonalContent?: (primary: Team, secondary: Team) => ReactNode;
  getResult1?: (primary: Team, secondary: Team) => string | number;
  getResult2?: (primary: Team, secondary: Team) => string | number;
  getTeamName?: (team: Team) => ReactNode;
  getTeamShortName?: (team: Team) => ReactNode;
  i18n?: {
    teams: string;
  };
  tableContainerProps?: Omit<TableContainerProps, "children">;
  tableHeadCellProps?: Omit<ComponentProps<typeof TableHeadCell>, "children">;
  tableProps?: Omit<TableProps, "children">;
  teams: Team[];
};

export default function CrossTable<Team extends TeamEntity>({
  diagonalProps,
  double,
  getDiagonalContent = () => "",
  getResult1 = () => "",
  getResult2 = () => "",
  getTeamName = (team: Team) => String(team.id),
  getTeamShortName = (team: Team) => String(team.id),
  i18n,
  tableContainerProps,
  tableHeadCellProps,
  tableProps,
  teams,
}: CrossTableProps<Team>) {
  return (
    <TableContainer {...tableContainerProps}>
      <Table {...tableProps}>
        <TableHead>
          <TableRow>
            <TableHeadCell {...tableHeadCellProps}>
              {i18n?.teams ?? "Teams"}
            </TableHeadCell>
            {teams.map((team) => (
              <TableHeadCell key={team.id} {...tableHeadCellProps}>
                {getTeamShortName(team)}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((primaryTeam) => (
            <TableRow key={primaryTeam.id}>
              <TableCell>{getTeamName(primaryTeam)}</TableCell>
              {teams.map((secondaryTeam) =>
                primaryTeam.id === secondaryTeam.id ? (
                  <DiagonalCell key={secondaryTeam.id} {...diagonalProps}>
                    {getDiagonalContent(primaryTeam, secondaryTeam)}
                  </DiagonalCell>
                ) : (
                  <ResultCell
                    key={secondaryTeam.id}
                    resultVariant={double ? "double" : "single"}
                    result1={getResult1(primaryTeam, secondaryTeam)}
                    result2={getResult2(primaryTeam, secondaryTeam)}
                  />
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
