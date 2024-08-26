import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { Container, Tab, Box, Typography, TextareaAutosize, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useCodeRunMutation } from 'services/api/compileApi';


const StyledEditorContainer = styled(Paper)(({ theme }) => ({
  height: '100%',
  overflowY: 'auto',
  width: '100%',
  padding: theme.spacing(2)
}));

const StyledOutputContainer = styled(Paper)(({ theme }) => ({
  height: '150px',
  overflowY: 'auto',
  padding: theme.spacing(2)
}));

const App = () => {
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
  const [value, setValue] = useState("1");
  
  const [codeRun, { isLoading, isError, data }] = useCodeRunMutation();



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async () => {
    const payload = {
      language: 'cpp',
      code,
      input
    };
    try {
      const data=await codeRun(payload).unwrap();
      console.log(data);
      setOutput(data.output);
      setValue('2');
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography>Code</Typography>
      <Box display="flex" flexDirection="column" gap={4}>
        {/* Left side: Compiler editor */}
        <Box flex={1} sx={{ paddingRight: "30px", height: '80%' }}>
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
                overflowY: 'auto',
              }}
            />
          </StyledEditorContainer>

        </Box>

        {/* Right side: Input and Output */}
        <Box flex={1} sx={{ height: "20%" }}>


          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                background: "#333333",
                position: "relative",
                top: 0,
                left: 0,
                overflow: "hidden",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Input"
                  value="1"
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                />
                <Tab
                  label="Output"
                  value="2"
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ overflow: "auto" }}>
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
              <Button
                variant="contained"
                sx={{ mt: 2, width: '100%' }}
                onClick={handleSubmit}
              >
                Run
              </Button>
              {/* Output box */}

            </TabPanel>
            <TabPanel value="2">
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
              </StyledOutputContainer
              ></TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
