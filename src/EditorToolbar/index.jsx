import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

function EditorToolbar({ children, visible = true, ...rest }) {
    if (!visible) return null;
    return (
        <Grid container
          id="editor__toolbar"
          alignItems="center"
          sx={{
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
        </Grid>
    );
}

EditorToolbar.propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
};

export default EditorToolbar;
