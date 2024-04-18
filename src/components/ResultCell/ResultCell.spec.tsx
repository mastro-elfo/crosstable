import { Table, TableBody, TableRow } from "@mui/material";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import ResultCell from "./ResultCell";

describe("ResultCell", () => {
  it("should render", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <ResultCell />
          </TableRow>
        </TableBody>
      </Table>
    );
  });
});
