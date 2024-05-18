[![Publish library](https://github.com/mastro-elfo/crosstable/actions/workflows/publish.yml/badge.svg)](https://github.com/mastro-elfo/crosstable/actions/workflows/publish.yml)

# CrossTable

# Install

```
yarn add mui-crosstable
```

```
npm i mui-crosstable
```

# Usage

Type `CustomTeam` must extend `{ id: number | string }`.

```tsx
import CrossTable from "mui-crosstable";

function CrossTablePage(){
    return (
        <CrossTable<CustomTeam>
            teams={LIST_OF_TEAMS}
            diagonalProps={{}}
            renderDiagonal={(team) => "/"}
            renderResult={(team1, team2) => getResultBetween(team1, team2)}
            renderTeamName={(team) => getTeamName(team)}
            renderShortTeamName={(team) => getShortTeamName(team)}
            i18n={ teams: translate("Teams") }
            resultCellProps={{}}
            shortTeamNameCellProps={{}}
            tableCellProps={{}}
            tableContainerProps={{}}
            tableHeadCellProps={{}}
            tableProps={{}}
            teamNameCellProps={{}}
        />
    );
}
```

# Properties

Type `Team` extends `{ id: number | string }`.

| property               | type                                                               | description                                                      |
| ---------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| teams                  | mandatory, `Team[]`                                                | List of teams or players                                         |
| diagonalProps          | optional, `Omit<TableCellProps, "children">`                       | Properties applied to each diagonal `TableCell`                  |
| renderDiagonal         | optional, `(primary: Team) => ReactNode`                           | Called to render the content of a diagonal cell                  |
| renderResult           | optional, `(primary: Team, secondary: Team) => ReactNode`          | Called to render the result between two teams                    |
| renderTeamName         | optional, `(team: Team) => ReactNode`                              | Called to render the team name                                   |
| renderShortTeamName    | optional, `(team: Team) => ReactNode`                              | Called to render the short version of the name                   |
| i18n                   | optional, `{teams: string;}`                                       | Override the default texts                                       |
| resultCellProps        | optional, `Omit<TableCellProps, "children">`                       | Properties applied to each `TableCell` with results              |
| shortTeamNameCellProps | optional, `Omit<TableCellProps, "children">`                       | Properties applied to each `TableHeadCell` with team short names |
| tableCellProps         | optional, `Omit<TableCellProps, "children">`                       | Properties applied to each `TableCell` inside `TableBody`        |
| tableContainerProps    | optional, `Omit<TableContainerProps, "children">`                  | Properties applied to `TableContainer`                           |
| tableHeadCellProps     | optional, `Omit<ComponentProps<typeof TableHeadCell>, "children">` | Properties applied to each `TableHeadCell`                       |
| tableProps             | optional, `Omit<TableProps, "children">`                           | Properties applied to `Table`                                    |
| teamNameCellProps      | optional, `Omit<TableCellProps, "children">`                       | Properties applied to each `TableCell` with team names           |

# Release

1. Update package version
2. Commit/Push, eventually skipping CI
