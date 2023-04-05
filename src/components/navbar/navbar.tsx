import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Menu,
  Toolbar,
  Button,
  Grid,
  IconButton,
  AppBar,
  MenuItem,
  Typography,
} from "@mui/material";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import MenuIcon from "@mui/icons-material/Menu";
import { PostButton } from "./navbar.styled";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TextWrap4 } from "../registration/registration.styled";
import useMediaQuery from "../../hooks/use-media-query";
const Navbar = () => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery();
  const pages = ["home", "articles", "contact"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleLogOut = () => {
    localStorage.setItem("currentuser", JSON.stringify(""));
    localStorage.setItem("current", JSON.stringify(""));
  };
  return (
    <Grid container>
      <AppBar position="fixed" style={{ background: "white", color: "black" }}>
        <Toolbar>
          <Grid
            item
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <TextWrap4 style={{ color: "black", paddingLeft: 10 }}>
              {textwrap.SkillupAfricaBlog}
            </TextWrap4>
          </Grid>

          <Box
            sx={{
              flexGrow: 1,
              display: isDesktop ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <Grid
              item
              md={7}
              lg={6}
              style={{
                paddingLeft: isDesktop ? 50 : 10,
                display: "flex",
              }}
            >
              <TextWrap4 style={{ color: "black" }}>
                {textwrap.SkillupAfricaBlog}
              </TextWrap4>
            </Grid>
            <Grid
              item
              md={12}
              lg={12}
              style={{
                paddingLeft: isDesktop ? 50 : 40,
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page, index) => (
                <Button key={index} onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Grid>
          </Box>

          <Grid
            item
            xs={4}
            sm={3}
            md={3}
            lg={3}
            sx={{ paddingLeft: isTablet ? -20 : "" }}
            display="flex"
            justifyContent="space-evenly"
          >
            <FacebookRoundedIcon
              sx={{ fontSize: isDesktop ? 32 : isMobile ? 20 : 24 }}
            />
            <TwitterIcon
              sx={{ fontSize: isDesktop ? 32 : isMobile ? 20 : 24 }}
            />
            <InstagramIcon
              sx={{ fontSize: isDesktop ? 32 : isMobile ? 20 : 24 }}
            />
            <YouTubeIcon
              sx={{ fontSize: isDesktop ? 32 : isMobile ? 20 : 24 }}
            />
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
            <PostButton onClick={handleCloseNavMenu}>
              <Link
                style={{
                  color: "#F3F2FF",
                  textDecoration: "none",
                }}
                to={`/newpost`}
              >
                {textwrap.PostArticle}
              </Link>
            </PostButton>
          </Grid>
          <PostButton
            onClick={handleLogOut}
            style={{
              marginLeft: 5,
            }}
          >
            <Link
              style={{
                color: "#F3F2FF",
                textDecoration: "none",
              }}
              to={`/login`}
            >
              {textwrap.LogOut}
            </Link>
          </PostButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Navbar;
