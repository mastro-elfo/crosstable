import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableHead, TableRow } from "@mui/material";
import TableHeadCell from "./TableHeadCell";

const meta: Meta<typeof TableHeadCell> = {
  component: TableHeadCell,
};

export default meta;
type Story = StoryObj<typeof TableHeadCell>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Hello</TableHeadCell>
        </TableRow>
      </TableHead>
    </Table>
  ),
};
