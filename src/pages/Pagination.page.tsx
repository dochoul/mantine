import { Group, Pagination } from "@mantine/core";
import Safari from "../components/Safari";

export default function PaginationPage() {
  return (
    <div>
      <h2 className="anchor">Usage</h2>
      <Safari>
        <Pagination.Root total={100}>
          <Group gap={5} justify="center">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>{" "}
      </Safari>
    </div>
  );
}
