import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableProps,
  TableRow,
} from "@mui/material";
import { ComponentProps, ReactNode } from "react";
import { TableHeadCell } from "../TableHeadCell";

type TeamEntity = { id: number | string };

type CrossTableProps<Team> = {
  diagonalProps?: Omit<TableCellProps, "children">;
  renderDiagonal?: (primary: Team) => ReactNode;
  renderResult?: (primary: Team, secondary: Team) => ReactNode;
  renderTeamName?: (team: Team) => ReactNode;
  renderShortTeamName?: (team: Team) => ReactNode;
  i18n?: {
    teams: string;
  };
  resultCellProps?: Omit<TableCellProps, "children">;
  shortTeamNameCellProps?: Omit<TableCellProps, "children">;
  tableCellProps?: Omit<TableCellProps, "children">;
  tableContainerProps?: Omit<TableContainerProps, "children">;
  tableHeadCellProps?: Omit<ComponentProps<typeof TableHeadCell>, "children">;
  tableProps?: Omit<TableProps, "children">;
  teamNameCellProps?: Omit<TableCellProps, "children">;
  teams: Team[];
};

export default function CrossTable<Team extends TeamEntity>({
  diagonalProps,
  renderDiagonal = () => "",
  renderResult = () => "",
  renderTeamName = (team: Team) => String(team.id),
  renderShortTeamName = (team: Team) => String(team.id),
  i18n,
  resultCellProps,
  shortTeamNameCellProps,
  tableCellProps,
  tableContainerProps,
  tableHeadCellProps,
  tableProps,
  teamNameCellProps,
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
              <TableHeadCell
                key={team.id}
                {...tableHeadCellProps}
                {...shortTeamNameCellProps}
              >
                {renderShortTeamName(team)}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((primaryTeam) => (
            <TableRow key={primaryTeam.id}>
              <TableCell {...tableCellProps} {...teamNameCellProps}>
                {renderTeamName(primaryTeam)}
              </TableCell>
              {teams.map((secondaryTeam) =>
                primaryTeam.id === secondaryTeam.id ? (
                  <TableCell
                    key={secondaryTeam.id}
                    {...tableCellProps}
                    {...diagonalProps}
                  >
                    {renderDiagonal(primaryTeam)}
                  </TableCell>
                ) : (
                  <TableCell
                    key={secondaryTeam.id}
                    {...tableCellProps}
                    {...resultCellProps}
                  >
                    {renderResult(primaryTeam, secondaryTeam)}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
