import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import { TableCol } from "./types";
import { GridEventListener, GridSortModel } from "@mui/x-data-grid";
import { sortType } from "./consts";

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
    hp: "1 HP",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
  },
  {
    id: 2,
    name: "avysaur",
    ID: "002",
    description: "Tire type Pokémon",
    Power: "Power Level 2",
    hp: "100 HP",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
  },
  {
    id: 3,
    name: "Ivysaur",
    ID: "003",
    description: "Fire type Pokémon",
    Power: "",
    hp: "",
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
    hp: "50 HP",
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
    hp: "50 HP",
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
    hp: "50 HP",
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
    hp: "50 HP",
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
    hp: "50 HP",
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
    hp: "50 HP",
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
    hp: "",
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
    hp: "80 HP",
    avatar:
      "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
  },
];
const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
  // Log the entire row object or any specific property from the row
  alert(`Row clicked: ${params.row.name}`);
};
const sortComparators = {
  Power: (v1: string, v2: string) => {
    const powerLevel1 = parseInt(v1.split(" ")[2], 10) || Infinity;
    const powerLevel2 = parseInt(v2.split(" ")[2], 10) || Infinity;
    return powerLevel1 - powerLevel2;
  },
  hp: (v1: string, v2: string) => {
    const powerLevel1 = parseInt(v1.split(" ")[2], 10) || Infinity;
    const powerLevel2 = parseInt(v2.split(" ")[2], 10) || Infinity;
    return powerLevel1 - powerLevel2;
  },
  name: (v1: string, v2: string) => v1.localeCompare(v2),
  ID: (v1: string, v2: string) => parseInt(v1, 10) - parseInt(v2, 10),
};

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
      {
        title: "Name",
        field: "name",
        width: 150,
      },
      {
        title: "ID",
        field: "ID",
        width: 90,
      },
      {
        title: "Description",
        field: "description",
        width: 544,
        flex: 2,
        minWidth: 400,
      },
      {
        title: "Power",
        field: "Power",
        width: 119,
      },
      {
        title: "HP",
        field: "hp",
        width: 119,
      },
    ],
    rows: sampleRows,
    handleRowClick: handleRowClick,
    style: {
      "& .MuiDataGrid-cell": {
        border: "none",
        textAlign: "left",
      },
      "& .MuiDataGrid-columnSeparator": {
        display: "none",
      },
      "& .theme--header": {
        backgroundColor: "#EBEFF6",
        textAlign: "left",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      "& .MuiDataGrid-root": {
        width: "100%",
      },
    },
    sortBy: { col: "name", order: sortType.ASC },
    headerClassName: "theme--header",
  },
};
