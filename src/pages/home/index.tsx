import { SearchInput } from "../../components/SearchInput"
import { Container } from "../../Styles/global"

import { useState } from "react"
import { UserProps } from "../../types"
import { Index } from "../../components/UserData/Index"

export function HomePage() {
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData(user: UserProps | null): void {
    setUser(user)
  }

  return (
    <Container>
      <SearchInput setUser={setUserData} />
      {user && <Index user={user} />}
    </Container>
  )
}
