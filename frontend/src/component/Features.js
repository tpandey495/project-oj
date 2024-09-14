import { Avatar, Box, Typography } from '@mui/material';
import tickright from '../assets/cicon.png';

const RegisterFeatures = ({ placeholder }) => {
    return (
        <Box display="flex" alignItems="center" className="register-feature">
            <Avatar alt="tickright" src={tickright} sx={{ width: 24, height: 24, marginRight: 1 }} />
            <Typography variant="body1">
                {placeholder}
            </Typography>
        </Box>
    );
};

export default RegisterFeatures;
