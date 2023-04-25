// @mui
import { Backdrop, CircularProgress, Typography, SxProps } from "@mui/material";
// ----------------------------------------------------------------------
type Props = {
  open: boolean;
  textLoading?: string;
  sx?: SxProps;
};
// ----------------------------------------------------------------------
export default function LoadingOverlay({
  open,
  textLoading = "Loading...",
  ...other
}: Props) {
  return (
    <Backdrop
      open={open}
      sx={{ position: "absolute", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      {...other}
    >
      <CircularProgress color="secondary"  />
      <Typography
        sx={{
          color: "#FFFFFF",
          ml: 2,
        }}
      >
        {textLoading}
      </Typography>
    </Backdrop>
  );
}
