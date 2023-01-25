import { RepositoryProps } from "../../types"
import {
  Container,
  Title,
  Description,
  RepositoryListContainer,
  RepositoryListItem,
} from "./styles"

export function RepositoryContent({ currentRepository }) {
  return (
    <Container>
      <RepositoryListContainer>
        {currentRepository &&
          currentRepository.map(({ name, description }: RepositoryProps) => {
            return (
              <RepositoryListItem key={name}>
                <Title>{name}</Title>
                <Description>{description}</Description>
              </RepositoryListItem>
            )
          })}
      </RepositoryListContainer>
    </Container>
  )
}
