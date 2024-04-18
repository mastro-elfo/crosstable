import { Table, TableBody, TableRow } from "@mui/material";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import SingleResultCell from "./SingleResultCell";

describe("SingleResultCell", () => {
  it("should render", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <SingleResultCell />
          </TableRow>
        </TableBody>
      </Table>
    );
  });
});
