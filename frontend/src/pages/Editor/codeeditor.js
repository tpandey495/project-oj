import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import axios from 'axios';
import { Container, Box, Typography, TextareaAutosize, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledEditorContainer = styled(Paper)(({ theme }) => ({
  height: '300px',
  overflowY: 'auto',
  padding: theme.spacing(2),
  //backgroundColor: theme.palette.background.paper,
}));

const StyledOutputContainer = styled(Paper)(({ theme }) => ({
  height: '150px',
  overflowY: 'auto',
  padding: theme.spacing(2),
  //backgroundColor: theme.palette.background.Paper,
}));

const  App=()=>{
  const [code, setCode] = useState(`#include <iostream> 
    using namespace std;
    // Define the main function
    int main() { 
        // Declare variables
        int num1, num2, sum;
        // Prompt user for input
        cin >> num1 >> num2;  
        // Calculate the sum
        sum = num1 + num2;  
        // Output the result
        cout << "The sum of the two numbers is: " << sum;  
        // Return 0 to indicate successful execution
        return 0;  
    }`);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    const payload = {
      language: 'cpp',
      code,
      input
    };

    try {
      const { data } = await axios.post(import.meta.env.VITE_BACKEND_URL, payload);
      console.log(data);
      setOutput(data.output);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4}>
        {/* Left side: Compiler editor */}
        <Box flex={1}>
          <StyledEditorContainer>
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: '0.75rem',
                outline: 'none',
                border: 'none',
                backgroundColor: '#f7fafc',
                height: '100%',
                overflowY: 'auto'
              }}
            />
          </StyledEditorContainer>
          <Button 
            variant="contained" 
            sx={{ mt: 2, width: '100%' }}
            onClick={handleSubmit}
          >
            Run
          </Button>
        </Box>

        {/* Right side: Input and Output */}
        <Box flex={1}>
          {/* Input textarea */}
          <Box mb={2}>
            <Typography variant="h6" component="h2" gutterBottom>
              Input
            </Typography>
            <TextareaAutosize
              minRows={5}
              value={input}
              placeholder="Input"
              onChange={(e) => setInput(e.target.value)}
              style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </Box>

          {/* Output box */}
          <StyledOutputContainer>
            <Typography variant="h6" component="h2" gutterBottom>
              Output
            </Typography>
            <Box
              sx={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: '0.75rem',
                whiteSpace: 'pre-wrap'
              }}
            >
              {output}
            </Box>
          </StyledOutputContainer>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
