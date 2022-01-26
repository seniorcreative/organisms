import { render, screen } from "@testing-library/react";
import OrganismGrid from "../components/organismGrid";

test("organism grid classes match number of grid rows and cols", () => {
  const { container } = render(<OrganismGrid rows={10} cols={12} />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("grid-rows-10");
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("grid-cols-12");
});
