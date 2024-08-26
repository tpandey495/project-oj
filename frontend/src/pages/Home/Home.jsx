import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import hero from 'assets/heroicon.png';
import Topics from 'component/Topics';
import CustomDataGrid from 'component/DataGrid';
import { useNavigate } from 'react-router-dom';

const rows = [
  {
    id: 1,
    status: 'unsolved',
    title: 'Subarray Sum Equals K',
    solution: true,
    acceptance: '32%',
    difficulty: 'Medium',
    frequency: 'Frequent'
  },
  {
    id: 2,
    status: 'solved',
    title: 'Two Sum',
    solution: true,
    acceptance: '45%',
    difficulty: 'Easy',
    frequency: 'Frequent'
  },
  {
    id: 3,
    status: 'unsolved',
    title: 'Longest Substring Without Repeating Characters',
    solution: true,
    acceptance: '25%',
    difficulty: 'Hard',
    frequency: 'Occasional'
  },
  {
    id: 4,
    status: 'solved',
    title: 'Best Time to Buy and Sell Stock',
    solution: true,
    acceptance: '53%',
    difficulty: 'Easy',
    frequency: 'Frequent'
  },
  {
    id: 5,
    status: 'unsolved',
    title: 'Product of Array Except Self',
    solution: true,
    acceptance: '38%',
    difficulty: 'Medium',
    frequency: 'Frequent'
  },
  {
    id: 6,
    status: 'solved',
    title: 'Merge Intervals',
    solution: true,
    acceptance: '41%',
    difficulty: 'Medium',
    frequency: 'Occasional'
  },
  {
    id: 7,
    status: 'unsolved',
    title: 'Binary Tree Maximum Path Sum',
    solution: true,
    acceptance: '21%',
    difficulty: 'Hard',
    frequency: 'Rare'
  },
  {
    id: 8,
    status: 'solved',
    title: 'Linked List Cycle',
    solution: true,
    acceptance: '47%',
    difficulty: 'Easy',
    frequency: 'Occasional'
  },
  {
    id: 9,
    status: 'unsolved',
    title: 'Word Break',
    solution: true,
    acceptance: '30%',
    difficulty: 'Medium',
    frequency: 'Frequent'
  },
  {
    id: 10,
    status: 'solved',
    title: 'Course Schedule',
    solution: true,
    acceptance: '36%',
    difficulty: 'Medium',
    frequency: 'Occasional'
  },
];

const columns = [
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params) => (
      params.value === 'solved' ? <CheckCircleIcon /> : <CalendarTodayIcon />
    ),
  },
  { field: 'title', headerName: 'Title', flex: 1 },
  {
    field: 'solution',
    headerName: 'Solution',
    flex: 1,
    renderCell: () => <CodeIcon />,
  },
  { field: 'acceptance', headerName: 'Acceptance', flex: 1 },
  { field: 'difficulty', headerName: 'Difficulty', flex: 1 },
  { field: 'frequency', headerName: "Frequency", flex: 1 },
];

const Home = () => {
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    navigate(`/practice/${params?.id}`);
  }

  return (
    <>
      <Box sx={{ padding: "64px", background: '#363636', color: 'white' }}>
        <Grid container spacing={2} sx={{ padding: { lg: "16px", md: 1 } }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'left', margin: { md: 4, } }}>
              <Typography variant='h3' gutterBottom>
                Focus on learning with ease by practicing first and then creating
                rojects.
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
      <Box sx={{ padding: 2, background: '#363636', color: 'white' }}>
        <Grid container spacing={2} sx={{ background: '#363636', color: 'white' }}>
          <Grid item xs={12} sx={{ background: '#363636', color: 'white' }}>
            <CustomDataGrid rows={rows} columns={columns} handleRowClick={handleRowClick} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
