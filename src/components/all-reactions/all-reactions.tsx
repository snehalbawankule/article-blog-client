import { Grid } from "@mui/material";
import { LengthTextWrap } from "../add-reaction/reaction.styled";

export const AllReactions = (props: any) => {
  const { post } = props;

  let likes =
    !post.likes || post.likes?.length < 1
      ? ""
      : post.likes.length === 1
      ? post.likes.length + " Like"
      : post.likes.length + " Likes";

  let comments =
    !post?.comments || post?.comments?.length < 1
      ? ""
      : post.comments.length === 1
      ? post?.comments?.length + " Comment"
      : post?.comments?.length + " Comments";

  const filteredArray = post?.comments?.filter(
    (obj: any) => obj.isReply === false
  );
  const length1 = filteredArray?.length;

  let average =
    !filteredArray || filteredArray?.length === 0
      ? 0
      : filteredArray.reduce((r: any, c: any) => r + c.rating, 0) / length1;

  let average1 =
    !filteredArray || filteredArray?.length === 0
      ? ""
      : "Rating " + average.toFixed(1).replace(/[.,]0$/, "") + "🌟";

  return (
    <>
      <Grid container flexDirection="row" display="flex">
        <Grid item xs={4} sm={4} md={3} lg={3}>
          <LengthTextWrap style={{ paddingTop: 7.5 }}>{likes}</LengthTextWrap>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={9}
          lg={9}
          display="flex"
          justifyContent="end"
        >
          <LengthTextWrap style={{ paddingTop: 7.5 }}>
            {comments}
          </LengthTextWrap>
          <LengthTextWrap style={{ paddingLeft: 7 }}>{average1}</LengthTextWrap>
        </Grid>
      </Grid>
    </>
  );
};
