import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function DomainsPage() {
  const { id } = useParams();
  const [filters, setFilters] = useState({
    type: { mcq: false, practice: false },
    difficulty: { easy: false, medium: false, hard: false },
    subdomains: { cpp: false, javascript: false, python: false },
  });

  const handleFilterChange = (category, key) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [key]: !prev[category][key] },
    }));
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: "30px",
        background: "#363636",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {/* Questions Section */}
      <Grid
        item
        xs={12}
        lg={8}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flexGrow: 1,
          position: "relative",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "10px",
              width: "100%",
              padding: "20px",
              background: "#fffafa",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h5">Question {index + 1}</Typography>
              <Typography variant="caption">
                <Typography
                  variant="caption"
                  component="span"
                  sx={{ color: "green" }}
                >
                  Easy,
                </Typography>{" "}
                C++ (Basic)
              </Typography>
              <Typography variant="caption" color="InfoText">
                Some hint will go here
              </Typography>
            </Box>
            <Box>
              <Tooltip title="Add to Favourite">
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
              </Tooltip>
              <Button variant="outlined" color="success">
                Solve Challenge
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Filters Section */}
      <Grid
        item
        xs={12}
        lg={3}
        md={4}
        sx={{
          minWidth: "250px",
          position: "sticky",
          top: "0px", // Adjust top spacing
          height: "100vh", // Ensure it fills the viewport height
          overflowY: "auto",
        }}
      >
        <Box
          sx={{ padding: "20px", background: "#fffafa", borderRadius: "10px" }}
        >
          <Typography variant="h6">Filters</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            {/* Type Filter */}
            <FormControl component="fieldset">
              <Typography variant="subtitle1">Type</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.type.mcq}
                      onChange={() => handleFilterChange("type", "mcq")}
                    />
                  }
                  label="MCQ"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.type.practice}
                      onChange={() => handleFilterChange("type", "practice")}
                    />
                  }
                  label="Practice"
                />
              </FormGroup>
            </FormControl>
            {/* Difficulty Filter */}
            <FormControl component="fieldset" sx={{ marginTop: 2 }}>
              <Typography variant="subtitle1">Difficulty</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.difficulty.easy}
                      onChange={() => handleFilterChange("difficulty", "easy")}
                    />
                  }
                  label="Easy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.difficulty.medium}
                      onChange={() =>
                        handleFilterChange("difficulty", "medium")
                      }
                    />
                  }
                  label="Medium"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.difficulty.hard}
                      onChange={() => handleFilterChange("difficulty", "hard")}
                    />
                  }
                  label="Hard"
                />
              </FormGroup>
            </FormControl>
            {/* Subdomains Filter */}
            <FormControl component="fieldset" sx={{ marginTop: 2 }}>
              <Typography variant="subtitle1">Subdomains</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.subdomains.cpp}
                      onChange={() => handleFilterChange("subdomains", "cpp")}
                    />
                  }
                  label="C++"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.subdomains.javascript}
                      onChange={() =>
                        handleFilterChange("subdomains", "javascript")
                      }
                    />
                  }
                  label="JavaScript"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.subdomains.python}
                      onChange={() =>
                        handleFilterChange("subdomains", "python")
                      }
                    />
                  }
                  label="Python"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DomainsPage;
