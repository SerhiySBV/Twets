import {
  Avatar,
  AvatarBox,
  Button,
  Followers,
  Footnotes,
  HorizontalLine,
  InfoBox,
  Logo,
 
  TweetsCount,
  Wrapper,
} from "./TweetItem.styled";

const TweetItem = () => {
  return (
    <Wrapper>
      <Logo src={"../images/Logo.png"} alt="Logo" />
      <Footnotes src="../images/picture.png" alt="Footnotes" />
      <AvatarBox>
        <HorizontalLine />
        <Avatar src="../images/boy.png" alt="Avatar" />
      </AvatarBox>

      <InfoBox>
        <TweetsCount>777 tweets</TweetsCount>
        <Followers>100,500 FOLLOWERS</Followers>
        <Button>FOLLOW</Button>
      </InfoBox>
    </Wrapper>
  );
};
export default TweetItem;
