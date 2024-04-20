import { Table, TableHead, TableRow } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import TableHeadCell from "./TableHeadCell";

describe("TableHeadCell", () => {
  it("should render", () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Content</TableHeadCell>
          </TableRow>
        </TableHead>
      </Table>
    );
    screen.getByText("Content");
  });
});
