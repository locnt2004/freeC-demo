import { styled } from "@mui/material/styles";

//-----------------------STYLE-----------------------//

const HeaderStyle = styled("header")(() => ({
  textAlign: "center",
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  position: "relative",
  overflow: "hidden",
  borderRadius: "0 0 85% 85% / 30%",
  span: {
    color: "#1890FF",
    fontStyle: "italic",
    fontSize: "30px",
  },
}));

const OverlayStyle = styled("div")(() => ({
  width: "100%",
  height: "100%",
  padding: "30px",
  color: "#FFF",
  textShadow: "1px 1px 1px #333",
  backgroundImage: "linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%)",
}));

//-----------------------COMPONENT-----------------------//
const Header = () => {
  return (
    <HeaderStyle>
      <OverlayStyle>
        <h1>Netflix and Chill</h1>
        <h3>
          <span>FreeC</span> Assignment Movie
        </h3>
      </OverlayStyle>
    </HeaderStyle>
  );
};

export default Header;
