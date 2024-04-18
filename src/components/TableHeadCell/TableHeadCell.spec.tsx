import { Table, TableHead, TableRow } from "@mui/material";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import TableHeadCell from "./TableHeadCell";

describe("TableHeadCell", () => {
  it("should render", () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell />
          </TableRow>
        </TableHead>
      </Table>
    );
  });
});
