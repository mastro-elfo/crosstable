import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableRow } from "@mui/material";
import SingleResultCell from "./SingleResultCell";

const meta: Meta<typeof SingleResultCell> = {
  component: SingleResultCell,
};

export default meta;
type Story = StoryObj<typeof SingleResultCell>;

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
          <SingleResultCell />
        </TableRow>
      </TableBody>
    </Table>
  ),
};
