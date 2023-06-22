import { useState } from "react";
import picture from "../images/picture.png";
import logo from "../images/Logo.png";
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

import { updateUser } from "../api/usersApi";

const UserItem = ({ user }) => {
  const { avatar, followers, tweets, following, id } = user;

  const [followingStatus, setFollowingStatus] = useState(following);
  const [followersValue, setFollowersValue] = useState(followers);

  const handleClick = () => {
    const updatedFollowingStatus = !followingStatus;
    setFollowingStatus(updatedFollowingStatus);
    setFollowersValue((prevState) =>
      updatedFollowingStatus ? prevState + 1 : prevState - 1
    );

    const data = {
      followers: updatedFollowingStatus
        ? followersValue + 1
        : followersValue - 1,
      following: updatedFollowingStatus,
    };
    updateUser(data, id);
  };

  const formattedCount = new Intl.NumberFormat("en-US").format(followersValue);

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <Footnotes src={picture} alt="Footnotes" />
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
          onClick={() => handleClick()}
        >          
          {followingStatus ? "FOLLOWING" : "FOLLOW"}
        </Button>
      </InfoBox>
    </Wrapper>
  );
};
export default UserItem;
