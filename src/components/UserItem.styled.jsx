import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
   position: relative;
  max-width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;
  margin: auto;
  box-sizing: border-box;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const HorizontalLine = styled.div`
  height: 8px;
  position: absolute;
  left: -36px;
  right: -36px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Footnotes = styled.img`
  padding-bottom: 18px;
  max-width: -webkit-fill-available;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  border: #ebd8ff solid 8px;
  max-height: 80px;
  max-width: 80px;
  object-fit: contain;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AvatarBox = styled.div`
position: relative;
    margin-bottom: 62px;
`;
export const TweetsCount = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;
export const Followers = styled(TweetsCount)`
  color: #ebd8ff;
  margin-bottom: 26px;
`;
export const Button = styled.button`
  width: 196px;
  height: 50px;
  background: ${(props)=>props.background};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
