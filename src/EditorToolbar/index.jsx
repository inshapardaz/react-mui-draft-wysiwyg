import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function EditorToolbar({ children, visible = true, ...rest }) {
    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          backgroundColor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
            {children}
        </Box>
    );
}

EditorToolbar.propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
};

export default EditorToolbar;
