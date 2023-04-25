import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FieldValues, useForm } from "react-hook-form";
import MovieList from "../movie/MovieList";
// services
import { useState } from "react";
import * as services from "../../services/movie";
import LoadingOverlay from "../LoadingOverlay";
//-----------------------STYLE-----------------------//

const ContainStyle = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 5%",
  flexDirection: "column",
  form: {
    flexDirection: "column",
    display: "flex",
    gap: "10px",
  },
}));

const CardContainStyle = styled(Card)(() => ({
  padding: "50px",
}));

const FormControlStyle = styled(FormControl)(() => ({
  ".MuiFormHelperText-root": {
    color: "red",
  },
}));

//-----------------------COMPONENT-----------------------//

const HomePage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [listMovie, setListMovie] = useState([]);

  const onSubmit = async (data: FieldValues) => {
    let query = `s=${data.movieTile}`;
    if (data?.movieType) {
      query = query + `&t=${data?.movieType}`;
    }
    try {
      setLoading(true);
      services.getMoviesBySearch(query).then((response: any) => {
        if (response?.Response && response?.Response === "True") {
          setListMovie(response?.Search);
        } else if (response?.Error === "Too many results.") {
          setError("movieTile", {
            type: "custom",
            message: "Too many results! Please input more infomation.",
          });
        } else if (response?.Error === "Movie not found!") {
          setError("movieTile", {
            type: "custom",
            message: "Movie not found!.",
          });
        } else {
          setError("movieTile", {
            type: "custom",
            message: "Something is wrong with the service.",
          });
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
      <CardContainStyle sx={{ width: "515px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControlStyle>
            <TextField
              label="Movie Title"
              variant="outlined"
              {...register("movieTile", {
                required: "Please input movie title",
              })}
              helperText={errors?.movieTile?.message as string}
            />
          </FormControlStyle>
          <FormControlStyle>
            <InputLabel id="movie-type-label">Movie Type</InputLabel>
            <Select
              id="movie-type"
              label="Movie Type"
              placeholder="Movie Type"
              labelId="movie-type-label"
              native={false}
              {...register("movieType")}
              fullWidth
              defaultValue=""
            >
              <MenuItem value={""}>All movie type</MenuItem>
              <MenuItem value={"movie"}>Movie</MenuItem>
              <MenuItem value={"series"}>Series</MenuItem>
              <MenuItem value={"episode"}>Episode</MenuItem>
            </Select>
          </FormControlStyle>
          <Button type="submit" variant="outlined">
            Search Movie
          </Button>
        </form>
      </CardContainStyle>
      {listMovie?.length && <MovieList movies={listMovie} />}

      <LoadingOverlay open={loading} />
    </ContainStyle>
  );
};

export default HomePage;
