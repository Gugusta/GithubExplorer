import {
  Info,
  Bio,
  ProfilePicture,
  SideInfo,
  Name,
  Username,
  JoinedAt,
} from "./styles"

interface TopAreaProps {
  username: string
  bio: string
  name: string
  joinedAt: string
  pfp: string
}

export const TopArea = ({
  username,
  name,
  joinedAt,
  bio,
  pfp,
}: TopAreaProps) => {
  return (
    <>
      <Info>
        <ProfilePicture src={pfp} alt={name} />
        <SideInfo>
          <Name>{name}</Name>
          <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Username>

          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  )
}
