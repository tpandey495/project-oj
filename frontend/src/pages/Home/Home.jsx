import { Box, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import hero from '../../assets/heroicon.png';
import Topics from '../../component/Topics';
import BottomNavbar from '../../component/BottomNavbar';
import Navbar from '../../component/Navbar';



const Home = () => {
  const columns = [
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'solution', headerName: 'Solution', flex: 1 },
    { field: 'acceptance', headerName: 'Acceptance', flex: 1 },
    { field: 'difficulty', headerName: 'Difficulty', flex: 1 },
    { field: 'frequency', headerName: "Frequency", flex: 1 },
  ];

  const rows = [
    {
      id: 1,
      status: 'Open',
      title: 'Issue with login',
      solution: 'Reset password',
      acceptance: 'High',
      difficulty: 'Low',
      frequency: 'Occasional'
    },
    {
      id: 2,
      status: 'In Progress',
      title: 'Error in data export',
      solution: 'Update export settings',
      acceptance: 'Medium',
      difficulty: 'Medium',
      frequency: 'Frequent'
    },
    {
      id: 3,
      status: 'Resolved',
      title: 'Performance issues',
      solution: 'Optimize database queries',
      acceptance: 'High',
      difficulty: 'High',
      frequency: 'Rare'
    },
    {
      id: 4,
      status: 'Closed',
      title: 'UI glitch in dashboard',
      solution: 'Patch UI components',
      acceptance: 'Low',
      difficulty: 'Low',
      frequency: 'Occasional'
    },
    {
      id: 5,
      status: 'Open',
      title: 'Incorrect calculations',
      solution: 'Fix calculation logic',
      acceptance: 'High',
      difficulty: 'Medium',
      frequency: 'Frequent'
    },
    {
      id: 6,
      status: 'In Progress',
      title: 'Network connectivity issue',
      solution: 'Check network configuration',
      acceptance: 'Medium',
      difficulty: 'High',
      frequency: 'Occasional'
    },
    {
      id: 7,
      status: 'Resolved',
      title: 'Error in report generation',
      solution: 'Update report templates',
      acceptance: 'High',
      difficulty: 'Medium',
      frequency: 'Rare'
    },
    {
      id: 8,
      status: 'Closed',
      title: 'Missing documentation',
      solution: 'Add missing documentation',
      acceptance: 'Low',
      difficulty: 'Low',
      frequency: 'Rare'
    },
    {
      id: 9,
      status: 'Open',
      title: 'User permissions issue',
      solution: 'Adjust user roles and permissions',
      acceptance: 'Medium',
      difficulty: 'Medium',
      frequency: 'Frequent'
    },
    {
      id: 10,
      status: 'In Progress',
      title: 'Data synchronization error',
      solution: 'Reconfigure data sync settings',
      acceptance: 'High',
      difficulty: 'High',
      frequency: 'Occasional'
    },
  ];


  return (
    <>
      <Navbar />
      <Box sx={{ padding: "64px", background: '#363636', color: 'white' }}>
        <Grid container spacing={2} sx={{ padding: { lg: "16px", md: 1 } }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'left', margin: { md: 4, } }}>
              <Typography variant='h3' gutterBottom>
                Focus on learning with ease by practicing first and then creating projects.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={hero} alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Topics />
      </Box>
      <Box sx={{ padding: 2, my: 3, background: '#363636', color: 'white' }}>
        <Grid container spacing={2} sx={{background: '#363636', color: 'white' }}>
          <Grid item xs={12} sx={{background: '#363636', color: 'white' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'
              }
              sx={{
                // Styles for the DataGrid component
                '& .MuiDataGrid-root': {
                  backgroundColor: '#1d1d1d', // Background color for the whole grid
                },
                '& .MuiDataGrid-cell': {
                  color: '#ffffff', // Text color for cells
                },
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#333333', // Background color for column headers
                  color: '#ffffff', // Text color for column headers
                },
                '& .MuiDataGrid-row.even-row': {
                  backgroundColor: '#2c2c2c', // Background color for even rows
                },
                '& .MuiDataGrid-row.odd-row': {
                  backgroundColor: '#1d1d1d', // Background color for odd rows
                },
                '& .MuiDataGrid-footerContainer': {
                  backgroundColor: '#333333', // Background color for the footer
                  color: '#ffffff', // Text color for the footer
                },
                '& .MuiDataGrid-toolbarContainer': {
                  backgroundColor: '#333333', // Background color for the toolbar
                  color: '#ffffff', // Text color for the toolbar
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <BottomNavbar />
    </>
  );
};

export default Home;
