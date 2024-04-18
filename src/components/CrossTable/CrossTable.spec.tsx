import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import CrossTable from "./CrossTable";

describe("CrossTable", () => {
  it("should render with empty teams", () => {
    render(<CrossTable teams={[]} />);
  });

  it("should render with teams", () => {
    render(<CrossTable teams={[{ id: 1 }, { id: 2 }]} />);
  });
});
