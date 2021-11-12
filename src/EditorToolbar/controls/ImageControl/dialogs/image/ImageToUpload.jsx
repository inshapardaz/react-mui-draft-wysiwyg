import React from 'react';
import PropTypes from 'prop-types';

function ImageToUpload({ width, height, src }) {
    return (
        <div style={{
            maxWidth: '100%',
            maxHeight: 300,
            overflow: 'auto',
            marginTop: (theme) => theme.spacing(2),
            marginBottom: (theme) => theme.spacing(2),
        }}>
            <img alt="" width={width} height={height} src={src} />
        </div>
    );
}

ImageToUpload.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
};

export default ImageToUpload;
