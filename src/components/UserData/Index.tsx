import { TopArea } from "./TopArea"
import LinksArea from "./LinksArea"
import { StartArea } from "./StartArea"
import { UserDataProps } from "../../types"
import { ThemeContext } from "../../contexts/ThemeContext"

import { Container, SideArea, ProfilePicture, ChangeThemeBtn } from "./styles"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

export const Index = ({ user }: UserDataProps) => {
  const { changeTheme, lightMode } = useContext(ThemeContext)

  return (
    <Container>
      <ChangeThemeBtn type="button" onClick={changeTheme}>
        {lightMode ? (
          <>
            DARK
            <img src="/assets/icon-moon.svg" alt="dark mode" />
          </>
        ) : (
          <>
            LIGHT
            <img src="/assets/icon-sun.svg" alt="light mode" />
          </>
        )}
      </ChangeThemeBtn>
      <ProfilePicture src={user.pfp} alt={user.name} />

      <SideArea>
        <TopArea
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        />

        <StartArea
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <LinksArea links={user.links} />
      </SideArea>
    </Container>
  )
}
