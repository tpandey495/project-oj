import { Box, Button, Avatar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Github from '../assets/github.png'; // Replace with your actual image paths
import LinkedIN from '../assets/linkedin (2).png';
import hashnode from '../assets/hashnode.png';

function Footer() {
  return (
    <Box sx={{  display: "flex", justifyContent: "space-between", alignItems: "center", padding: '10px  30px' , boxShadow:"0px 0px 2px 0px gray",background: '#363636',color:'white'}}>
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
        <Button variant="text" color="primary" to='' component={Link}>
          <Avatar src={Github} sx={{ height: '30px', width: '30px',color:'#fff' }} />
        </Button>
        <Button variant="text" color="primary">
          <Avatar src={LinkedIN} sx={{ height: '30px', width: '30px',color:'#fff' }} />
        </Button>
        <Button variant="text" color="primary">
          <Avatar src={hashnode} sx={{ height: '30px', width: '30px',color:'#fff' }} />
        </Button>
      </Box>
      
      <Box sx={{ textAlign: "right" ,marginRight:'0px' }}>
        <Typography>&copy; Tarun Panday</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
