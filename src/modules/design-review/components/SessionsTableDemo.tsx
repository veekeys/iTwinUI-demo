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
          },
          {
            id: "modified",
            Header: "Modified",
            accessor: "modified",
          },
          {
            id: "modifiedBy",
            Header: "Modified By",
            accessor: "modifiedBy",
          },
          {
            id: "created",
            Header: "Created",
            accessor: "created",
          },
          {
            id: "createdBy",
            Header: "Created By",
            accessor: "createdBy",
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
        modified: "2022-04-24T20:20:45Z",
        modifiedBy: "rblackledge0",
        created: "2021-07-26T13:00:23Z",
        createdBy: "mfinnigan0",
      },
      {
        name: "Flexidy",
        modified: "2021-08-02T21:45:02Z",
        modifiedBy: "lcoventry1",
        created: "2022-02-28T12:14:27Z",
        createdBy: "kmoat1",
      },
      {
        name: "Fix San",
        modified: "2021-10-31T02:20:25Z",
        modifiedBy: "mcarne2",
        created: "2022-04-25T22:13:44Z",
        createdBy: "gpevie2",
      },
      {
        name: "Domainer",
        modified: "2022-04-25T20:59:27Z",
        modifiedBy: "acowling3",
        created: "2022-04-22T20:04:59Z",
        createdBy: "byakushkin3",
      },
      {
        name: "Gembucket",
        modified: "2022-03-25T02:28:10Z",
        modifiedBy: "acluff4",
        created: "2022-02-13T17:06:12Z",
        createdBy: "ebrouwer4",
      },
      {
        name: "Zoolab",
        modified: "2021-07-03T04:59:28Z",
        modifiedBy: "vjewster5",
        created: "2022-04-12T05:17:41Z",
        createdBy: "hpatry5",
      },
      {
        name: "Prodder",
        modified: "2021-09-04T10:51:18Z",
        modifiedBy: "ladamovitz6",
        created: "2021-09-07T10:10:52Z",
        createdBy: "mtrunks6",
      },
      {
        name: "Temp",
        modified: "2021-08-12T10:20:33Z",
        modifiedBy: "hgoadby7",
        created: "2021-09-15T21:04:02Z",
        createdBy: "simpey7",
      },
      {
        name: "Namfix",
        modified: "2022-02-09T05:16:51Z",
        modifiedBy: "bbelk8",
        created: "2021-08-24T21:41:35Z",
        createdBy: "mstocks8",
      },
      {
        name: "Tin",
        modified: "2021-09-26T14:50:20Z",
        modifiedBy: "iwindless9",
        created: "2022-04-06T13:50:31Z",
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
