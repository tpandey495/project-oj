import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Tab,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScienceIcon from "@mui/icons-material/Science";
import TimerIcon from "@mui/icons-material/Timer";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import Editor from './codeeditor';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LabTabs = React.memo(() => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "#000",
        overflow: "hidden",
        position: "fixed",
        padding: "15px",
      }}>

      <Grid item xs={6} md={6}>
        <Paper
          sx={{
            height: "100vh",
            background: "#262626",
            color: "#fff",
            overflow: "scroll",
            border: "1px solid #ffffff",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
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
                    icon={<DescriptionIcon />}
                    label="Description"
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
                    icon={<AutoStoriesIcon />}
                    label="Editorial"
                    value="2"
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  />
                  <Tab
                    icon={<ScienceIcon />}
                    label="Solutions"
                    value="3"
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  />
                  <Tab
                    icon={<TimerIcon />}
                    label="Testcase"
                    value="4"
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                    }}
                  />
                  <Tab
                    icon={<CheckBoxIcon />}
                    label="Test Result"
                    value="5"
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
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h5">1395.</Typography>
                  <Typography variant="h5">Count Number of Teams</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Medium"
                      onClick={handleClick}
                      sx={{ color: "#ffffff", background: "#363636" }}
                    />
                    <Chip
                      icon={<LabelImportantIcon />}
                      label="Topics"
                      onClick={handleClick}
                      sx={{ color: "#ffffff", background: "#363636" }}
                    />
                    <Chip
                      icon={<LocalMallIcon />}
                      label="Companies"
                      onClick={handleClick}
                      sx={{ color: "#ffffff", background: "#363636" }}
                    />
                    <Chip
                      icon={<EmojiObjectsIcon />}
                      label="Hints"
                      onClick={handleClick}
                      sx={{ color: "#ffffff", background: "#363636" }}
                    />
                  </Stack>
                </Box>
                <Box sx={{ textAlign: "left", flexDirection: "column", pt: 2 }}>
                  <Typography variant="body1" display="block">
                    You are given a string <code>`s`</code> consisting only of
                    characters <code>'a'</code>
                    and <code>'b'</code>.
                  </Typography>
                  <Typography variant="body1">
                    You can delete any number of characters in `s` to make `s`
                    balanced. `s` is balanced if there is no pair of indices{" "}
                    <code>(i, j)</code> such that <code>i &lt; j</code> and{" "}
                    <code>s[i] = 'b'</code> and <code>s[j] = 'a'</code>.
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    Return{" "}
                    <i>
                      the minimum number of deletions needed to make s balanced.
                    </i>
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "left", flexDirection: "column", pt: 4 }}>
                  <Typography variant="subtitle2" sx={{ pb: 4 }}>
                    <strong>Example 1:</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Input:</strong> s = "aababbab"
                  </Typography>
                  <Typography variant="body1">
                    <strong>Output:</strong> 2
                  </Typography>
                  <Typography variant="body1">
                    <strong>Explanation:</strong> You can either: <br /> Delete
                    the characters at 0-indexed positions 2 and 6{" "}
                    <code>("aababbab"  "aaabbb")</code> , or <br />
                    Delete the characters at 0-indexed positions 3 and 6
                    <code>("aababbab" "aabbbb").</code>
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "left", flexDirection: "column", pt: 4 }}>
                  <Typography variant="subtitle2" sx={{ pb: 4 }}>
                    <strong>Example 2:</strong>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Input:</strong> s = "bbaaaaabb"
                  </Typography>
                  <Typography variant="body1">
                    <strong>Output:</strong> 2
                  </Typography>
                  <Typography variant="body1">
                    <strong>Explanation:</strong> The only solution is to delete
                    the first two characters.
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "left", flexDirection: "column", pt: 4 }}>
                  <Typography variant="subtitle2" sx={{ pb: 4 }}>
                    <strong>Constraints:</strong>
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: 2 }}>
                    <Typography component="li" variant="body1">
                      <code>
                        1 &lt;= s.length &lt;= 10<sup>5</sup>
                      </code>
                    </Typography>
                    <Typography component="li" variant="body1">
                      <code>s[i]</code> is <code>'a'</code> or <code>'b'</code>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    textAlign: "left",
                    borderBottom: "1px solid #9b9a9a",
                    padding: "20px 0",
                  }}
                >
                  <Typography variant="body2">
                    Accepted <strong>74.7K</strong>
                  </Typography>
                  <Typography variant="body2">
                    Submissions <strong>120.1K</strong>
                  </Typography>
                  <Typography variant="body2">
                    Acceptance Rate <strong>62.2%</strong>
                  </Typography>
                </Box>
                <Box>
                  <Accordion
                    sx={{
                      background: "#262626",
                      color: "#fff",
                      borderBottom: "1px solid #9b9a9a",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="white" />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      {" "}
                      {<LabelImportantIcon />}
                      Topics
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex" }}>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            label="String"
                            onClick={handleClick}
                            sx={{ color: "#ffffff", background: "#363636" }}
                          />
                          <Chip
                            label="Dynamic Programming"
                            onClick={handleClick}
                            sx={{ color: "#ffffff", background: "#363636" }}
                          />
                          <Chip
                            label="Stack"
                            onClick={handleClick}
                            sx={{ color: "#ffffff", background: "#363636" }}
                          />
                        </Stack>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      background: "#262626",
                      color: "#fff",
                      borderBottom: "1px solid #9b9a9a ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="white" />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      {<BusinessCenterIcon />}
                      Companies
                    </AccordionSummary>
                    <AccordionDetails>
                      You can speed up the finding of A's and B's in suffix and
                      prefix using preprocessing
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      background: "#262626",
                      color: "#fff",
                      borderBottom: "1px solid #9b9a9a ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="white" />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      {" "}
                      {<EmojiObjectsIcon />}
                      Hint 1
                    </AccordionSummary>
                    <AccordionDetails>
                      You need to find for every index the number of Bs before
                      it and the number of A's after it
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      background: "#262626",
                      color: "#fff",
                      borderBottom: "1px solid #9b9a9a ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="white" />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      {" "}
                      {<EmojiObjectsIcon />}
                      Hint 2
                    </AccordionSummary>
                    <AccordionDetails>
                      You can speed up the finding of A's and B's in suffix and
                      prefix using preprocessing
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      background: "#262626",
                      color: "#fff",
                      borderBottom: "1px solid #9b9a9a ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="white" />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      {" "}
                      {<DescriptionIcon />}
                      Similar Questions
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>
                        <a>Check if All A's Appears Before All B's</a>
                      </Typography>
                      <Typography>
                        <a>Easy</a>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{
                      background: "#262626",
                      color: "#fff",
                      borderBottom: "1px solid #9b9a9a ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="white" />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      {" "}
                      {<ChatIcon />}
                      Discussions (57)
                    </AccordionSummary>
                    <AccordionDetails>
                      You can speed up the finding of A's and B's in suffix and
                      prefix using preprocessing
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </TabPanel>
              <TabPanel value="2">Editorial</TabPanel>
              <TabPanel value="3">Solutions</TabPanel>
              <TabPanel value="4">Testcase</TabPanel>
              <TabPanel value="5">Test Result</TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6} md={6}>
        <StyledPaper
          sx={{ height: "100%", background: "#262626", color: "#fff" }}
        >
          <Paper
            sx={{
              height: "100vh",
              background: "#262626",
              color: "#fff",
              overflow: "scroll",
              border: "1px solid #ffffff",
              borderRadius: "20px",
            }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
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
                      icon={<DescriptionIcon />}
                      label="Description"
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
                      icon={<AutoStoriesIcon />}
                      label="Editorial"
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
                <TabPanel value="1" sx={{ overflow: "auto" }}><Editor /></TabPanel>
                <TabPanel value="2">Editorial</TabPanel>
              </TabContext>
            </Box>
          </Paper>
        </StyledPaper>
      </Grid>
    </Grid>
  );
});

export default LabTabs;