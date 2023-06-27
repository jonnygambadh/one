import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

interface OrderStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  cancelledOrders: number;
}

const Statistics: React.FC = () => {
  // Mocked data
  const stats: OrderStats = {
    totalOrders: 100,
    pendingOrders: 20,
    completedOrders: 70,
    cancelledOrders: 10,
  };

  return (
    <Box sx={{ p: "5px" }}>
      <Typography variant="h5">Orders</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Total Orders</TableCell>
              <TableCell>Pending Orders</TableCell>
              <TableCell>Completed Orders</TableCell>
              <TableCell>Cancelled Orders</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{stats.totalOrders}</TableCell>
              <TableCell>{stats.pendingOrders}</TableCell>
              <TableCell>{stats.completedOrders}</TableCell>
              <TableCell>{stats.cancelledOrders}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Statistics;
