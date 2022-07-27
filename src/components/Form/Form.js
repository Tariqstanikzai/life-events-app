import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from "../../actions/posts";
import { updatePost } from "../../../../server/controllers/posts";


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '',selectedFile: ''});
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        

    }

    const clear = () => {

    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h5">Creating a LiFeEvEnTS</Typography>
            <TextField name="creator" variant="outlind" label="Event Creator" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            <TextField name="title" variant="outlind" label="title" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="message" variant="outlind" label="message" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            <TextField name="tags" variant="outlind" label="tags" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
            <Button className={classes.fileInput} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="container" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>

            </div>



            </form>


        </Paper>
    );
}

export default Form;
