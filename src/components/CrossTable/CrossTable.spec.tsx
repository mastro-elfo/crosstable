import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CrossTable from "./CrossTable";

describe("CrossTable", () => {
  it("should render with empty teams", () => {
    render(<CrossTable teams={[]} />);
  });

  it("should render with teams", () => {
    render(<CrossTable teams={[{ id: 1 }, { id: 2 }]} />);
  });

  it("should apply props to diagonal items", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        diagonalProps={{
          role: "test",
        }}
      />
    );
    const cells = screen.getAllByRole("test");
    expect(cells.length).to.equal(2);
  });

  it("should render custom content into diagonal items", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        renderDiagonal={(primary) => `primary-${primary.id}`}
      />
    );
    screen.getByText("primary-1");
    screen.getByText("primary-2");
  });

  it("should render custom result", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        renderResult={(primary, secondary) =>
          `result-${primary.id}-${secondary.id}`
        }
      />
    );
    screen.getByText("result-1-2");
    screen.getByText("result-2-1");
  });

  it("should render custom team name", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        renderTeamName={(team) => `team-${team.id}`}
      />
    );
    screen.getByText("team-1");
    screen.getByText("team-2");
  });

  it("should render custom short team name", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        renderShortTeamName={(team) => `team-${team.id}`}
      />
    );
    screen.getByText("team-1");
    screen.getByText("team-2");
  });

  it("should render custom team title", () => {
    render(
      <CrossTable teams={[{ id: 1 }, { id: 2 }]} i18n={{ teams: "Players" }} />
    );
    screen.getByText("Players");
  });

  it("should apply props to result cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        resultCellProps={{
          role: "test",
        }}
      />
    );
    const cells = screen.getAllByRole("test");
    expect(cells.length).to.equal(2);
  });

  it("should apply props to team name cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        teamNameCellProps={{
          role: "test",
        }}
      />
    );
    const cells = screen.getAllByRole("test");
    expect(cells.length).to.equal(2);
  });

  it("should apply props to short team name cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        shortTeamNameCellProps={{
          role: "test",
        }}
      />
    );
    const cells = screen.getAllByRole("test");
    expect(cells.length).to.equal(2);
  });

  it("should apply props to all table body cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        tableCellProps={{
          role: "test",
        }}
      />
    );
    const cells = screen.getAllByRole("test");
    expect(cells.length).to.equal(6);
  });

  it("should apply props to table container cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        tableContainerProps={{
          role: "test",
        }}
      />
    );
    screen.getByRole("test");
  });

  it("should apply props to table head cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        tableHeadCellProps={{
          role: "test",
        }}
      />
    );
    const cells = screen.getAllByRole("test");
    expect(cells.length).to.equal(3);
  });

  it("should apply props to table body cells", () => {
    render(
      <CrossTable
        teams={[{ id: 1 }, { id: 2 }]}
        tableProps={{
          role: "test",
        }}
      />
    );
    screen.getByRole("test");
  });
});
