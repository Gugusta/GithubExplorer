import { useEffect, useState, useRef } from "react"
import {
  Container,
  Input,
  InputArea,
  InputLabel,
  SubmitBtn,
  ThemeArea,
  Title,
  Warn,
} from "./styles"

import { TopAreaProps, UserProps, RepositoryProps } from "../../types"
import { joinedDate } from "../../utils/formatter"
import { useNavigate } from "react-router-dom"

export const SearchInput = ({ setUser }: TopAreaProps) => {
  const [empty, setEmpty] = useState<boolean>(false)
  const [notFound, setNotFound] = useState<boolean>(false)
  const usernameRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  function handleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      setEmpty(true)
      setUser(null)
      return
    }

    setEmpty(false)
    fetchUser(usernameRef.current.value)
  }

  async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const responseRepository = await fetch(
      `https://api.github.com/users/${username}/repos`
    )

    const data = await response.json()
    const dataRepository = await responseRepository.json()

    if (response.status != 200) {
      setNotFound(true)
      setUser(null)
      return
    }

    setNotFound(false)

    const user: UserProps = {
      pfp: data.avatar_url,
      name: data.name,
      joinedAt: joinedDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      links: {
        location: data.location,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog,
      },
    }
    const userData = {
      user,
      dataRepository,
    }

    setUser(user)
    navigate("/SearchPage", { state: { userData } })
  }

  return (
    <Container>
      <ThemeArea>
        <Title> Github Explorer </Title>
      </ThemeArea>

      <InputArea
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <InputLabel>
          <img src="/assets/icon-search.svg" alt="search .." />
        </InputLabel>

        <Input
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="Search username ..."
        />
        {empty && <Warn>Enter User</Warn>}
        {notFound && <Warn>Not Found</Warn>}

        <SubmitBtn type="submit">Search</SubmitBtn>
      </InputArea>
    </Container>
  )
}
