import { Card, Chip, Rating, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
// services
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { useNavigate, useParams } from "react-router-dom";
import * as services from "../../services/movie";
import LoadingOverlay from "../LoadingOverlay";
//-----------------------STYLE-----------------------//
const ContainStyle = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 5%",
}));
const PosterStyle = styled("img")(() => ({
  width: "100%",
  height: "auto",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.01)",
  },
}));

const ButtonStyle = styled("div")(() => ({
  position: "fixed",
  top: 10,
  left: 10,
  color: "white",
  textAlign: "center",
  display: "flex",
  gap: "10px",
  cursor: "pointer",
  fontStyle: "italic",
  fontWeight: 700,
}));

const InfoStyle = styled("div")(() => ({
  padding: "20px",
  flexWrap: "wrap",
  gap: "20px",
  flex: 2,
  p: {
    fontStyle: "italic",
  },
}));

const CardContainStyle = styled(Card)(() => ({
  display: "flex",
}));
//-----------------------TYPE-----------------------//
type Movie = {
  Actors: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Plot: string;
  Poster: string;
  Released: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Runtime: string;
  Title: string;
  Writer: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
};

//-----------------------COMPONENT-----------------------//

const MovieDetail = () => {
  // get ID from URL
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    if (id) {
      getMovieDetail(id);
    } else {
      navigate(`/home`, { replace: true });
    }
  }, [id]);
  const getMovieDetail = (imdbID: string) => {
    const query = `i=${imdbID}`;
    setLoading(true);
    try {
      services.detailMovie(query).then((response: any) => {
        if (response?.Response && response?.Response === "True") {
          setMovie(response);
        }
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ContainStyle>
      <ButtonStyle onClick={() => navigate(`/home`, { replace: true })}>
        <ChairOutlinedIcon /> Back to Home
      </ButtonStyle>
      <CardContainStyle>
        <Stack sx={{ flex: 1 }}>
          <PosterStyle width={"100%"} src={movie?.Poster} alt={movie?.Title} />
        </Stack>
        <InfoStyle>
          <h2>{movie?.Title}</h2>
          <Typography>Released: {movie?.Released}</Typography>
          <Typography>Writer: {movie?.Writer}</Typography>
          <Typography>Language: {movie?.Language}</Typography>

          <Typography>Country: {movie?.Country}</Typography>

          <br />
          <Typography>
            Rating (Votes: {movie?.imdbVotes}) {"   "}
          </Typography>
          <Chip label={movie?.imdbRating} color="primary" />
          <br />
          {movie?.imdbRating && (
            <Rating max={10} value={+movie.imdbRating} readOnly />
          )}

          <h4>Plot:</h4>
          <Typography>{movie?.Plot}</Typography>
        </InfoStyle>
      </CardContainStyle>

      <LoadingOverlay open={loading} />
    </ContainStyle>
  );
};

export default MovieDetail;
