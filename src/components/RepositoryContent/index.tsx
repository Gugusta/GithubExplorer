import { RepositoryProps } from "../../types"
import { Container } from "./styles"

export function RepositoryContent({ currentRepository }) {
  return (
    <Container>
      <ul>
        {currentRepository &&
          currentRepository.map(
            ({ id, name, description }: RepositoryProps) => {
              return (
                <li key={id}>
                  <h1>{name}</h1>
                  <div>{description}</div>
                </li>
              )
            }
          )}
      </ul>
    </Container>
  )
}
