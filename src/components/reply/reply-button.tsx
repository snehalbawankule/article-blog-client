import { useState } from "react";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ButtonReply, ReplyInput } from "../add-reaction/reaction.styled";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { actions } from "../../store/reducer";
import { useAppDispatch } from "../../hooks/hooks";

export const ReplyButton = (props: any) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  var currentUser = JSON.parse(localStorage.getItem("current") || "{}");
  const ReplyTo = props.commentId;
  const [inputVisible, setInputVisible] = useState(false);
  const [comment, setComment] = useState();
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const commentId = uuidv4();
    const newComment = {
      id: id,
      commentId: commentId,
      userName: currentUser.name,
      userProfile: currentUser.profile,
      rating: "0",
      comment: comment,
      isReply: true,
      replyTo: ReplyTo,
    };
    dispatch(actions.addComment(newComment));
    navigate(`/articles/${id}`);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex"></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
        <ButtonReply onClick={() => setInputVisible(!inputVisible)}>
          Reply
        </ButtonReply>
        {inputVisible ? (
          <>
            <Grid item xs={10} sm={12} md={12} lg={5} display="flex">
              <ReplyInput
                type="text"
                placeholder="Type here..."
                defaultValue={comment}
                onBlurCapture={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={12} md={6} lg={2} display="flex">
              <SendIcon
                onClick={(e) => handleSubmit(e)}
                sx={{ color: "#6d6d6d" }}
              />
            </Grid>
          </>
        ) : null}
      </Grid>
    </Grid>
  );
};
