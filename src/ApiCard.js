import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Grid, CircularProgress, Box, CssBaseline } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Carde = ({ personagem }) => {
  return (
    <CssBaseline>
    <Card sx={{ maxWidth: 300, m: 2, bgcolor: "#1e1e1e", color: "white", borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="300" image={personagem.image} alt={personagem.name} />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {personagem.name}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <FiberManualRecordIcon fontSize="small" sx={{ color: personagem.status === "Alive" ? "#4caf50" : personagem.status === "Dead" ? "#f44336" : "#9e9e9e" }} />
          <Typography variant="body2" color="gray">
            {personagem.status} - {personagem.species}
          </Typography>
        </Box>
        <Typography variant="body2" color="gray" sx={{ mt: 1 }}>
          <strong>Origem:</strong>
        </Typography>
        <Typography variant="body2">{personagem.origin.name}</Typography>
        <Typography variant="body2" color="gray" sx={{ mt: 1 }}>
          <strong>Localização:</strong>
        </Typography>
        <Typography variant="body2">{personagem.location.name}</Typography>
      </CardContent>
    </Card>
    </CssBaseline>
  );
};

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar os personagens:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Grid container justifyContent="center" spacing={2} sx={{ mt: 3, bgcolor: "#121212", p: 3, borderRadius: 2 }}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        characters.map((personagem) => (
          <Grid item key={personagem.id}>
            <Carde personagem={personagem} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CharacterList;
