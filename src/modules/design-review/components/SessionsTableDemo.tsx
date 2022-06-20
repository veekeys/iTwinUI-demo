import React from "react";
import { Surface, Table } from "@itwin/itwinui-react";

const SessionsTableDemo = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Table",
        columns: [
          {
            id: "name",
            Header: "Name",
            accessor: "name",
            minWidth: 100,
          },
          {
            id: "modified",
            Header: "Modified",
            accessor: "modified",
            width: 150,
          },
          {
            id: "modifiedBy",
            Header: "Modified By",
            accessor: "modifiedBy",
            minWidth: 125,
          },
          {
            id: "created",
            Header: "Created",
            accessor: "created",
            width: 150,
          },
          {
            id: "createdBy",
            Header: "Created By",
            accessor: "createdBy",
            minWidth: 150,
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        name: "Namfix",
        modified: "2022-04-24",
        modifiedBy: "rblackledge0",
        created: "2021-07-26",
        createdBy: "mfinnigan0",
      },
      {
        name: "Flexidy",
        modified: "2021-08-02",
        modifiedBy: "lcoventry1",
        created: "2022-02-28",
        createdBy: "kmoat1",
      },
      {
        name: "Fix San",
        modified: "2021-10-31",
        modifiedBy: "mcarne2",
        created: "2022-04-25",
        createdBy: "gpevie2",
      },
      {
        name: "Domainer",
        modified: "2022-04-25",
        modifiedBy: "acowling3",
        created: "2022-04-22",
        createdBy: "byakushkin3",
      },
      {
        name: "Gembucket",
        modified: "2022-03-25",
        modifiedBy: "acluff4",
        created: "2022-02-13",
        createdBy: "ebrouwer4",
      },
      {
        name: "Zoolab",
        modified: "2021-07-03",
        modifiedBy: "vjewster5",
        created: "2022-04-12",
        createdBy: "hpatry5",
      },
      {
        name: "Prodder",
        modified: "2021-09-04",
        modifiedBy: "ladamovitz6",
        created: "2021-09-07",
        createdBy: "mtrunks6",
      },
      {
        name: "Temp",
        modified: "2021-08-12",
        modifiedBy: "hgoadby7",
        created: "2021-09-15",
        createdBy: "simpey7",
      },
      {
        name: "Namfix",
        modified: "2022-02-09",
        modifiedBy: "bbelk8",
        created: "2021-08-24",
        createdBy: "mstocks8",
      },
      {
        name: "Tin",
        modified: "2021-09-26",
        modifiedBy: "iwindless9",
        created: "2022-04-06",
        createdBy: "vpaula9",
      },
    ],
    []
  );
  return (
    <Surface elevation={1}>
      <Table
        data={data}
        columns={columns}
        emptyTableContent="No data"
        isSortable
      />
    </Surface>
  );
};

export default SessionsTableDemo;
