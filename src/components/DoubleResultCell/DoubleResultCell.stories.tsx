import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableRow } from "@mui/material";
import DoubleResultCell from "./DoubleResultCell";

const meta: Meta<typeof DoubleResultCell> = {
  component: DoubleResultCell,
};

export default meta;
type Story = StoryObj<typeof DoubleResultCell>;

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
          <DoubleResultCell result1="1" result2="2" />
        </TableRow>
      </TableBody>
    </Table>
  ),
};
