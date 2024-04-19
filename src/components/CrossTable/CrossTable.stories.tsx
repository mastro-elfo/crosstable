import type { Meta, StoryObj } from "@storybook/react";

import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Box } from "@mui/material";
import CrossTable from "./CrossTable";

const meta: Meta<typeof CrossTable> = {
  component: CrossTable,
};

export default meta;
type Story = StoryObj<typeof CrossTable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const TEAMS = [
  {
    id: 1,
    name: "Fabiano Caruana",
    results: [
      { id: 2, result1: "1", result2: "½" },
      { id: 3, result1: "1", result2: "½" },
      { id: 4, result1: "½", result2: "½" },
      { id: 5, result1: "", result2: "½" },
      { id: 6, result1: "½", result2: "" },
      { id: 7, result1: "", result2: "½" },
      { id: 8, result1: "½", result2: "0" },
    ],
  },
  {
    id: 2,
    name: "Nijat Abasov",
    results: [
      { id: 1, result1: "½", result2: "0" },
      { id: 3, result1: "½", result2: "0" },
      { id: 4, result1: "", result2: "0" },
      { id: 5, result1: "½", result2: "" },
      { id: 6, result1: "", result2: "0" },
      { id: 7, result1: "½", result2: "½" },
      { id: 8, result1: "½", result2: "0" },
    ],
  },
  {
    id: 3,
    name: "Alireza Firouzja",
    results: [
      { id: 1, result1: "½", result2: "0" },
      { id: 2, result1: "1", result2: "½" },
      { id: 4, result1: "1", result2: "" },
      { id: 5, result1: "", result2: "0" },
      { id: 6, result1: "½", result2: "½" },
      { id: 7, result1: "½", result2: "0" },
      { id: 8, result1: "0", result2: "" },
    ],
  },
  {
    id: 4,
    name: "Gukesh D",
    results: [
      { id: 1, result1: "½", result2: "½" },
      { id: 2, result1: "1", result2: "" },
      { id: 3, result1: "", result2: "0" },
      { id: 5, result1: "½", result2: "1" },
      { id: 6, result1: "½", result2: "1" },
      { id: 7, result1: "½", result2: "½" },
      { id: 8, result1: "½", result2: "" },
    ],
  },
  {
    id: 5,
    name: "Vidit Gujrathi",
    results: [
      { id: 1, result1: "½", result2: "½" },
      { id: 2, result1: "", result2: "½" },
      { id: 3, result1: "1", result2: "½" },
      { id: 4, result1: "0", result2: "½" },
      { id: 6, result1: "0", result2: "½" },
      { id: 7, result1: "0", result2: "0" },
      { id: 8, result1: "1", result2: "1" },
    ],
  },
  {
    id: 6,
    name: "Praggnanandhaa R",
    results: [
      { id: 1, result1: "", result2: "½" },
      { id: 2, result1: "1", result2: "½" },
      { id: 3, result1: "½", result2: "½" },
      { id: 4, result1: "0", result2: "½" },
      { id: 5, result1: "½", result2: "1" },
      { id: 7, result1: "½", result2: "" },
      { id: 8, result1: "0", result2: "½" },
    ],
  },
  {
    id: 7,
    name: "Ian Nepomniachtchi",
    results: [
      { id: 1, result1: "½", result2: "" },
      { id: 2, result1: "½", result2: "½" },
      { id: 3, result1: "1", result2: "½" },
      { id: 4, result1: "½", result2: "½" },
      { id: 5, result1: "1", result2: "1" },
      { id: 6, result1: "", result2: "½" },
      { id: 8, result1: "", result2: "½" },
    ],
  },
  {
    id: 8,
    name: "Hikaru Nakamura",
    results: [
      { id: 1, result1: "1", result2: "½" },
      { id: 2, result1: "1", result2: "½" },
      { id: 3, result1: "", result2: "1" },
      { id: 4, result1: "", result2: "½" },
      { id: 5, result1: "0", result2: "0" },
      { id: 6, result1: "½", result2: "1" },
      { id: 7, result1: "½", result2: "" },
    ],
  },
];

export const Primary: Story = {
  render: () => (
    <CrossTable
      teams={TEAMS}
      i18n={{ teams: "Players" }}
      renderTeamName={(team) => team.name}
      renderResult={(primary, secondary) => (
        <Box sx={{ aspectRatio: "1/1" }}>
          {TEAMS.find((team) => team.id === primary.id)?.results?.find(
            (result) => result.id === secondary.id
          )?.result1 ?? ""}
        </Box>
      )}
      renderDiagonal={() => (
        <BlurOnIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
      )}
      resultCellProps={{
        padding: "none",
      }}
      diagonalProps={{ align: "center" }}
      shortTeamNameCellProps={{ align: "center" }}
    />
  ),
};
