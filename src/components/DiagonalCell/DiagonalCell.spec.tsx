import { Table, TableBody, TableRow } from "@mui/material";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import DiagonalCell from "./DiagonalCell";

describe("DiagonalCell", () => {
  it("should render", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <DiagonalCell />
          </TableRow>
        </TableBody>
      </Table>
    );
  });
});
