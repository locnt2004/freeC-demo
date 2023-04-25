import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

//-----------------------STYLE-----------------------//

const ContainStyle = styled("div")(() => ({
  padding: "20px",
  flexWrap: "wrap",
  gap: "20px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
}));

const PosterStyle = styled("img")(() => ({
  width: "100%",
  height: "auto",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.01)",
  },
}));

const CardStyle = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  ".MuiCardContent-root .MuiTypography-root ": {},
  ".MuiCardActions-root": {
    justifyContent: "center",
  },
}));
//-----------------------TYPE-----------------------//
type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type Props = {
  movies: Movie[];
};

//-----------------------COMPONENT-----------------------//

const MovieList = ({ movies }: Props) => {
  const navigate = useNavigate();

  const onClickDetails = (movie: Movie) => {
    navigate(`/detail/${movie?.imdbID}`, { replace: true });
  };

  const renderItems = (item: Movie, index: number) => {
    return (
      <CardStyle key={`${item?.Title}-${index}`}>
        <PosterStyle
          key={`${item?.Title}-${index}`}
          width={"100%"}
          src={item?.Poster}
          alt={item?.Title}
          onClick={() => onClickDetails(item)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.Title}
          </Typography>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={() => onClickDetails(item)}>
              View More
            </Button>
          </CardActions>
        </CardContent>
      </CardStyle>
    );
  };
  return (
    <ContainStyle>
      {movies?.map((item, index) => renderItems(item, index))}
    </ContainStyle>
  );
};

export default memo(MovieList);
