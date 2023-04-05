import { NewArticle, PostButton } from "../new-post/new-post.styled";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import { useState } from "react";
import { Input } from "./contact-us.styled";
const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  //const dispatch = useAppDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setContactInfo({ name: "", email: "", contact: "", message: "" });
  };
  const { isDesktop, isTablet } = useMediaQuery();

  return (
    <form>
      <Grid
        container
        sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3, mt: 5 }}
        spacing={5}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <NewArticle>Contact Us</NewArticle>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <Input
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={contactInfo.name}
            placeholder="Name"
            minLength={5}
            maxLength={10}
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            onBlur={handleChange}
            defaultValue={contactInfo.email}
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <Input
            type="text"
            name="contact"
            onBlur={handleChange}
            defaultValue={contactInfo.contact}
            placeholder="Contact No"
            maxLength={10}
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <Input
            type="text"
            name="message"
            onBlur={handleChange}
            defaultValue={contactInfo.message}
            placeholder="Enter the message"
            maxLength={100}
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <PostButton onClick={handleSubmit}>Post</PostButton>
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactUs;
