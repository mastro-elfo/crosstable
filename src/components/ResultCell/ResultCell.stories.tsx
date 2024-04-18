import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableRow } from "@mui/material";
import ResultCell from "./ResultCell";

const meta: Meta<typeof ResultCell> = {
  component: ResultCell,
};

export default meta;
type Story = StoryObj<typeof ResultCell>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Single: Story = {
  render: () => <ResultCell result1="1" />,
};

export const Double: Story = {
  render: () => (
    <Table>
      <TableBody>
        <TableRow>
          <ResultCell resultVariant="double" result1="0" result2="½" />
        </TableRow>
      </TableBody>
    </Table>
  ),
};
