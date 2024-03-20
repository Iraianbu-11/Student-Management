import React , {useState} from 'react';
import { Box, TextField, Button, Grid,styled } from '@mui/material';
const Component = styled(Box)({
  width: '80%',
  margin: '50px auto',
});
const Delete = () => {
  const [regNo, setRegNo] = useState('');
  const handleDelete = async () => {
    try {
      const formattedData = {
        body: JSON.stringify({
          reg: regNo
        }) 
    };
    console.log(formattedData);
      const response = await fetch('https://x4vpu1ts34.execute-api.ap-south-1.amazonaws.com/Dev/deleteStudent', {
        method: 'DELETE',
        body: JSON.stringify(formattedData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  return (
    <Component>
    <h1 style={{ textAlign: 'center' }}>Delete Student</h1>
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="regNo"
            label="Register No"
            variant="filled"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
  </Component>
  );
};

export default Delete;