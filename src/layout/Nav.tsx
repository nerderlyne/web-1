import { useRouter } from 'next/router'
import Item from './Item'

export default function Nav() {
  const router = useRouter()

  const isActive = (link: string) => {
    if (link === router.pathname) {
      return true
    }
    return false
  }

  return (
    // make responsive for mobile
    <nav className="flex flex-row justify-center align-center border-b-4 border-black">
      <Item link="/" label="home" isActive={isActive('/')} />
      <Item link="/join" label="join" isActive={isActive('/join')} />
      <Item link="/events" label="events" isActive={isActive('/events')} />
      <Item link="https://snapshot.org/#/lexdao.eth" label="governance" isExternal={true} />
      <Item link="/guilds" label="guilds" isActive={isActive('/guilds')} />

      {/* Be gated to DAO members */}
      <Item link="/applicants" label="applicants" isActive={isActive('/applicants')} />
    </nav>
  )
}
