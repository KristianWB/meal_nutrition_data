import React, { useMemo, } from 'react';
import Table from './Table';
//import getData from './getData';
import data from './data';

/*
const data = 
[
  {
    "score": 17.592657,
    "show": {
      "mass": 0,
      "carbonhydrate": 100,
      "protein": 200,
      "fat": 300,
      "kCal": 600
    }
  },
]
*/

function TableApp() {
    const columns = useMemo(
      () => [
        {
          // first group - Dish type and name
          Header: "Meal",
          // First group columns
          columns: [
            {
              Header: "Name",
              accessor: "show.name"
            },
            {
              Header: "Type",
              accessor: "show.type"
            }
          ]
        },
        {
          // Second group - Details
          Header: "Details",
          // Second group columns
          columns: [
            {
              Header: "Amount in grams",
              accessor: "show.mass"
            },
            {
              Header: "Carbohydrate",
              accessor: "show.carbohydrate"
            },
            {
              Header: "protein",
              accessor: "show.protein"
            },
            {
              Header: "fat",
              accessor: "show.fat"
            },
            {
              Header: "Total kCal",
              accessor: "show.kCal"
            }
          ]
        }
      ],
      []
    );

    return (
        <div className="TableApp">
            <Table columns={columns} data={data} />
        </div>
    );
};

export default TableApp;
