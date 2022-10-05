import Image from 'next/image'

import { getFirstAndLastInitialsUpperCase } from 'helpers/string'
import * as S from './styles'

type Props = {
  url?: string
  name: string
  description?: string
}

const ProfileImg = ({ url, name }: Omit<Props, 'description'>) => {
  if (!url) {
    const avatarPlaceholder = getFirstAndLastInitialsUpperCase(name)
    return <S.AvatarPlaceholder>{avatarPlaceholder}</S.AvatarPlaceholder>
  }

  return (
    <Image
      src={url}
      alt={`Avatar of ${name}`}
      layout="fill"
      objectFit="contain"
    />
  )
}

const Avatar = ({ name, url, description }: Props) => {
  return (
    <S.Container>
      <S.InfoContainer>
        <p>{name}</p>
        <small>{description}</small>
      </S.InfoContainer>
      <S.ImageContainer>
        <ProfileImg url={url} name={name} />
      </S.ImageContainer>
    </S.Container>
  )
}

export default Avatar
