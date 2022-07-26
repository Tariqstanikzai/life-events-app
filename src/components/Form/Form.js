import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import fileBase from 'react-file-base64';
import useStyles form './styles';


const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '',selectedFile: ''});
    const classes = useStyles();

    const handleSubmit = () => {

    }

    return (
        <Paper className={mergeClasses.paper}>
            <form autoComplete="off" noValidate className={mergeClasses.form} onSubmit={handleSubmit}>
            <Typography variant="h5">Creating a LiFeEvEnTS</Typography>
            <TextField name="creator" variant="outlind" label="Event Creator" fullWidthvalue={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            <TextField name="title" variant="outlind" label="title" fullWidthvalue={postData.creator}onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="message" variant="outlind" label="message" fullWidthvalue={postData.creator}onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            <TextField name="tags" variant="outlind" label="tags" fullWidthvalue={postData.creator}onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
            <div className={classes.fileInput}><fileBase type="file"multiple={false}onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/>
            <Button className={classes.fileInput} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="container" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>

            </div>



            </form>


        </Paper>
    );
}

export default Form;
