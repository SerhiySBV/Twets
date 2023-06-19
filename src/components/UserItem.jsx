import {  useState } from "react";
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
} from "./UserItem.styled";

import axios from "axios";

const UserItem = (user) => {
  const { avatar, followers, tweets, following, id } = user.user;
  const [followingStatus, setFollowingStatus] = useState(following);
  const [followersValue, setFollowersValue] = useState(followers);

  const handleClick = () => {
    setFollowingStatus(followingStatus ? false : true);
    !followingStatus
      ? setFollowersValue(followersValue + 1)
      : setFollowersValue(followersValue -1);
    
    const data = {
      followers: followersValue,
      following: followingStatus,
    };

    axios
      .put(
        `https://648f329a75a96b664444d30b.mockapi.io/users/users/${id}`,
        data
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
 
  const formattedCount = new Intl.NumberFormat("en-US").format(followersValue);

  return (
    <Wrapper>
      <Logo src={"../images/Logo.png"} alt="Logo" />
      <Footnotes src="../images/picture.png" alt="Footnotes" />
      <AvatarBox>
        <HorizontalLine />
        <Avatar src={avatar} alt="Avatar" />
      </AvatarBox>

      <InfoBox>
        <TweetsCount>{tweets} tweets</TweetsCount>
        <Followers>{formattedCount} FOLLOWERS</Followers>
        <Button
          type="button"
          background={followingStatus ? "#5CD3A8" : "#ebd8ff"}
          onClick={handleClick}
        >
          {followingStatus ? "FOLLOWING" : "FOLLOW"}
        </Button>
      </InfoBox>
    </Wrapper>
  );
};
export default UserItem;
