import { Group, Pagination } from "@mantine/core";
import Playground from "@/components/Playground";

export default function PaginationPage() {
  return (
    <div>
      <Playground title="Usage">
        <Pagination.Root total={100}>
          <Group gap={10}>
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>{" "}
      </Playground>
    </div>
  );
}
