import React from 'react';
import MUIEditor, { MUIEditorState } from 'urdu-editor';
import toHTML from 'urdu-editor/src/conversion/toHTML';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function App() {
    const [editorState, setEditorState] = React.useState(MUIEditorState.createEmpty());
    const [isReadOnly, setIsReadOnly] = React.useState(false);
    const [dir, setDir] = React.useState('ltr');
    const [lang, setLang] = React.useState('en');
    const [toolbarPosition, setToolbarPosition] = React.useState('top');
    const [html, setHtml] = React.useState('');

    const onChange = (newState) => {
        setEditorState(newState);
        setHtml(toHTML(newState.getCurrentContent()));
    };

    const onLangChange =(newLanguage) => {
        setLang(newLanguage);
        setDir(newLanguage === 'ur' ? 'rtl' : 'ltr');
    }

    return (
        <Container style={{ direction : dir }}>
            <div sx={{
        paddingTop: theme => theme.spacing(5),
        paddingBottom: theme => theme.spacing(3),
    }}>
                <Grid container alignItems="center" justify="flex-end" spacing={4}>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isReadOnly}
                                    onChange={(ev) => setIsReadOnly(ev.target.checked)}
                                />
                            }
                            label="Read only"
                        />
                    </Grid>
                    <Grid item>
                        <InputLabel id="toolbar-position-select-label">Toolbar position</InputLabel>
                        <Select
                            fullWidth
                            labelId="toolbar-position-select-label"
                            id="toolbar-position-select"
                            value={toolbarPosition}
                            onChange={(ev) => setToolbarPosition(ev.target.value)}>
                            <MenuItem value="invisible">Invisible</MenuItem>
                            <MenuItem value="top">Top</MenuItem>
                            <MenuItem value="bottom">Bottom</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item>
                        <InputLabel id="lang-select-label">Language</InputLabel>
                        <Select
                            fullWidth
                            labelId="lang-select-label"
                            id="lang-select"
                            value={lang}
                            onChange={(ev) => onLangChange(ev.target.value)}>
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="es">Spanish</MenuItem>
                            <MenuItem value="ca">Catalan</MenuItem>
                            <MenuItem value="ur">اردو</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </div>

            <MUIEditor
                editorState={editorState}
                onChange={onChange}
                config={{
                    lang,
                    draftEditor: { readOnly: isReadOnly },
                    toolbar: {
                        visible: toolbarPosition !== 'invisible',
                        position: toolbarPosition === 'invisible' ? 'top' : toolbarPosition,
                    },
                }}
            />

            <pre>{html}</pre>
        </Container>
    );
}

export default App;
