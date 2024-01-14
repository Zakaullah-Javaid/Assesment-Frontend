import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GridCellParams } from "@mui/x-data-grid";
import { UserData } from "../types";

const createColumns = (handleRowClick: (selectedUser: UserData) => void) => [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params: GridCellParams) => (
      <Avatar
        alt="User"
        src={params.value?.toString()}
        style={{ width: "40px", height: "40px" }}
      />
    ),
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "location", headerName: "Location", width: 300 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "cell", headerName: "Cell", width: 150 },
  {
    field: "profile",
    headerName: "Profile",
    width: 100,
    renderCell: (params: GridCellParams) => (
      <IconButton
        onClick={() => handleRowClick(params.row as UserData)}
        color="primary"
        size="small"
      >
        <AccountCircleIcon />
      </IconButton>
    ),
  },
];

export default createColumns;
