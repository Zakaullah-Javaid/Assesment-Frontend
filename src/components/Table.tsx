import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserData } from "../types";
import createColumns from "../utils";
import { fetchUsers } from "../utils/apiService";
import { useFilter } from "../context/FilterContext";

export default function UserList() {
  const [originalUsers, setOriginalUsers] = useState<UserData[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigate = useNavigate();
  const {
    state: { gender, search },
    dispatch,
  } = useFilter();
  const resultsPerPage: number = 10;
  const totalResultsInDB: number = 500;

  const fetchData = async (page: number) => {
    const users = await fetchUsers(page, resultsPerPage);
    setOriginalUsers(users);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    let filtered = [...originalUsers];

    if (gender !== "all") {
      filtered = filtered.filter((user) => user.gender === gender);
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredUsers(filtered);
  }, [gender, search, originalUsers]);

  const handlePageChange = (params: { page: number }) => {
    setCurrentPage(params.page);
  };

  const getRowId = (row: UserData): string => row?.id || "defaultId";

  const handleRowClick = (selectedUser: UserData) => {
    console.log("Clicked row data:", selectedUser);
    navigate("/profile", { state: { userData: selectedUser } });
  };

  const columns = createColumns(handleRowClick);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({ type: "SET_GENDER", payload: event.target.value as string });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH", payload: event.target.value });
  };

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <Box sx={{ width: 120, marginBottom: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        label="Search"
        variant="outlined"
        margin="normal"
        fullWidth
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          pagination
          rowCount={totalResultsInDB}
          onPaginationModelChange={(params) => handlePageChange(params)}
          autoPageSize
          paginationMode="server"
          getRowId={getRowId}
        />
      </div>
    </Box>
  );
}
