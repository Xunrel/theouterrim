import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  indexRender
} from "./shared/ColumnHelper"
import {
  getCustomRangeFilterListOptions,
  getRangeFilterOptions,
  priceRender,
} from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function VehiclesColumnProvider({children, currentBook}){
  let bookData = ProvideBookData()
  let columns = makeColumns(
  [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/vehicles/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Category", name: "category" },
    { label: "Manufacturer", name: "manufacturer" },
    { label: "Model", name: "model" },
    { label: "Silhouette", name: "silhouette" },
    { label: "Speed", name: "speed" },
    { label: "Handling", name: "handling" },
    { label: "Crew", name: "crew" },
    { label: "Encum.", name: "encumbrance" },
    { label: "Passengers", name: "passengers" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: priceRender,
        ...getCustomRangeFilterListOptions("Price"),
        ...getRangeFilterOptions("Price"),
      },
    },
    { label: "Rarity", name: "rarity" },
    { label: "HP", name: "hp" },
    { label: "Weapons", name: "weapons" },
 {
      label: "Index",
      name: "index",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) =>
          indexRender(value, tableMeta, bookData, currentBook),
      },
    },
  ], true)

  return React.cloneElement(React.Children.only(children), { columns })
}
