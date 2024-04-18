import { Table, TableBody, TableRow } from "@mui/material";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import DoubleResultCell from "./DoubleResultCell";

describe("DoubleResultCell", () => {
  it("should render", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <DoubleResultCell />
          </TableRow>
        </TableBody>
      </Table>
    );
  });
});
