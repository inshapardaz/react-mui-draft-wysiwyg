import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useEditor from '../../../hooks/useEditor';
import { translateLiteralWithPrefix } from '../../../utils/translateUtils';

function DropdownControl({ value, onChange, options, minWidth = 150, ...rest }) {
    const editor = useEditor();

    return (
        <Select
            value={value}
            onChange={(ev) => onChange(ev.target.value)}
            autoWidth
            variant='standard'
            sx={ {
                margin: (theme) => theme.spacing(1),
            }}
            style={{ minWidth }}
            {...rest}>
            {options.map((option) => (
                <MenuItem key={option.value || 'empty'} value={option.value}>
                    {option.text ? translateLiteralWithPrefix(option.text, editor.translate) : ''}
                </MenuItem>
            ))}
        </Select>
    );
}

DropdownControl.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    minWidth: PropTypes.number,
};

export default DropdownControl;
