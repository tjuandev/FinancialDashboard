import { getInitialUpperCase } from 'helpers/string'
import * as S from './styles'

type Props = {
  url?: string
  name: string
  description?: string
}

const ProfileImg = ({ url, name }: Omit<Props, 'description'>) => {
  if (!url) {
    const avatarPlaceholder = getInitialUpperCase(name)
    return <S.AvatarPlaceholder>{avatarPlaceholder}</S.AvatarPlaceholder>
  }

  return <img src={url} alt={`Avatar of ${name}`} />
}

const Avatar = ({ name, url, description }: Props) => {
  return (
    <S.Container>
      <S.InfoContainer>
        <p>{name}</p>
        <small>{description}</small>
      </S.InfoContainer>
      <ProfileImg url={url} name={name} />
    </S.Container>
  )
}

export default Avatar
