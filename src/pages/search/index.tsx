import { Container, HomeButton } from "../../Styles/global"

import { useEffect, useState } from "react"
import { UserProps } from "../../types"
import { Index } from "../../components/UserData/Index"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { RepositoryContent } from "../../components/RepositoryContent"
import { Pagination } from "../../components/Pagination"
export function SearchPage() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [repository, setRepository] = useState([{}])
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(1)
  const [repositoryPerPage] = useState(8)
  const pageNumbers = []
  const indexOfLastRepository = currentPage * repositoryPerPage
  const indexOfFirstRepository = indexOfLastRepository - repositoryPerPage
  const currentRepository = repository.slice(
    indexOfFirstRepository,
    indexOfLastRepository
  )

  useEffect(() => {
    setUser(location.state.userData.user)
    setRepository(location.state.userData.dataRepository)
  }, [user, repository])

  for (let i = 1; i <= Math.ceil(repository.length / repositoryPerPage); i++) {
    pageNumbers.push(i)
  }

  function NextPage() {
    if (currentPage === pageNumbers.length) return

    setCurrentPage(currentPage + 1)
  }

  function PreviousPage() {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }

  return (
    <Container>
      {user && <Index user={user} />}
      {repository && (
        <RepositoryContent currentRepository={currentRepository} />
      )}

      <Pagination
        pageNumbers={pageNumbers}
        NextPage={NextPage}
        PreviousPage={PreviousPage}
      />
      <NavLink to="/">
        <HomeButton>Home</HomeButton>
      </NavLink>
    </Container>
  )
}
