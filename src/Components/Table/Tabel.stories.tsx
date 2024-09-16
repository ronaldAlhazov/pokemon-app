import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { TableCol } from "./types";
import { GridSortModel } from "@mui/x-data-grid";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Table",
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleRows = [
  {
    id: 1,
    name: "Bulbasaur",
    ID: "001",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    Power: "Power Level 6",
    hp: "45",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    id: 2,
    name: "avysaur",
    ID: "002",
    description: "Tire type Pokémon",
    Power: "Power Level 2",
    hp: "60",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
  {
    id: 3,
    name: "Ivysaur",
    ID: "003",
    description: "Fire type Pokémon",
    Power: "Power Level 2",
    hp: "60",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
  {
    id: 4,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 5,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 6,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 7,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 8,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 9,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 10,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
  {
    id: 11,
    name: "Venusaur",
    ID: "004",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    Power: "Power Level 4",
    hp: "80",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
];

// Primary Story
export const Primary: Story = {
  args: {
    cols: [
      {
        title: "",
        field: "avatar",
        width: 70,

        renderCell: (params) => (
          <img
            src={params.value as string}
            alt={params.row.name}
            style={{ width: "50px", height: "50px" }}
          />
        ),
      },
      { title: "Name", field: "name", width: 150 },
      { title: "ID", field: "ID", width: 90 },
      {
        title: "Description",
        field: "description",
        width: 544,
        flex: 2,
        minWidth: 400,
      },
      { title: "Power", field: "Power", width: 119 },
      { title: "HP", field: "hp", width: 119 },
    ],
    rows: sampleRows,
    onClick: (row) => alert(`Row clicked: ${row}`),
    style: {
      "& .MuiDataGrid-cell": {
        border: "none",
      },
      "& .MuiDataGrid-columnSeparator": {
        display: "none",
      },
      "& .theme--header": {
        backgroundColor: "#EBEFF6",
      },
      "& .MuiDataGrid-root": {
        width: "100%",
      },
    },
    sortBy: { col: "Power", order: "asc" },
    headerClassName: "theme--header",
    headerTypo: (label: string) => (
      <div
        style={{
          fontFamily: "Mulish, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
          lineHeight: "22px",
          textAlign: "left",
          padding: "10px",
          backgroundColor: "#EBEFF6",
        }}
      >
        {label}
      </div>
    ),
  },
};
