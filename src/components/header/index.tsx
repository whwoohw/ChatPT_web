import { Link } from "react-router-dom";
import { StyledLink } from "../../utils/StyledComponents";
import { useState } from "react";
import {
  LogoFont,
  OtherFont,
  OtherPage,
  PagePart,
  UserFont,
  UserPage,
  Wrapper,
} from "./header.styled";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <Wrapper>
      <UserPage>
        <StyledLink to="/userinfo">
          <UserFont>내정보</UserFont>
        </StyledLink>
        {loggedIn ? (
          <button
            style={{
              border: "0",
              margin: "0",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <UserFont>로그아웃</UserFont>
          </button>
        ) : (
          <StyledLink to="/login">
            <UserFont>로그인</UserFont>
          </StyledLink>
        )}
      </UserPage>
      <OtherPage>
        <StyledLink to="/">
          <LogoFont>Chat-PT</LogoFont>
        </StyledLink>
        <PagePart>
          <StyledLink to="/">
            <OtherFont>Input</OtherFont>
          </StyledLink>
          <StyledLink to="/result">
            <OtherFont>Result</OtherFont>
          </StyledLink>
        </PagePart>
      </OtherPage>
    </Wrapper>
  );
};

export default Header;
