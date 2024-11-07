import { Box } from '@mui/material';
import React from 'react';

export default function Center(props) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            {props.children}
        </Box>
    );
}
