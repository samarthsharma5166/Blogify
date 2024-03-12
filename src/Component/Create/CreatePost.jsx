import { Box, FormControl, styled, Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './CreatePost.css'
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ]
  ]
}
const StyledBox = styled(Box)`
  width:100vw;
  height:100vh;
  padding:40px
`;
const StyledFormControl = styled(FormControl)`
background:#fff;
display: block;
margin:auto auto; 
border: 1px solid #f7f7f7;
border-radius: 10px;
box-shadow: -7px -7px 17px #fff,7px 7px 17px rgba(70, 70, 70, 0.15);
width:50%;
min-height:80%;
overflow:hidden;
`;


const initialPost = {
  title: '',
  description: '',
  username: '',
  categories: '',
  createdDate: new Date()
}
const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');
  useEffect(() => {
    const getImage = () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file ", file);
      }
    }
  }, [])
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }
  return (
    <StyledBox>
      <StyledFormControl className='scroll'>
        <img src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="img" alt="" />
        <Box className="postWrapper">
          <label htmlFor='add' title='add image' className='addFile'><FaPlus /></label>
          <input type="file" id='add' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
          <input type="text" placeholder='Title...' className='title' onChange={(e) => handleChange(e)} name='title' />
        </Box>
        <Box className="editor-wrapper">
          <ReactQuill
            theme="snow"
            placeholder='Tell your story...'
            modules={modules}
            className='editor-input'
            name='description'
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <button className='btn'>Post</button>
      </StyledFormControl>
    </StyledBox >
  )
}
export default CreatePost; 