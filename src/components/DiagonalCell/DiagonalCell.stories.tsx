import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableRow } from "@mui/material";
import DiagonalCell from "./DiagonalCell";

const meta: Meta<typeof DiagonalCell> = {
  component: DiagonalCell,
};

export default meta;
type Story = StoryObj<typeof DiagonalCell>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Table>
      <TableBody>
        <TableRow>
          <DiagonalCell>\</DiagonalCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
