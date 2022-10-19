import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container.styled';
import { Head, Logo, NavList, LinkNav } from './Header.styled';
import HeaderLogo from '../img/header__logo.svg';

export const Header = () => {
  return (
    <>
      <Head>
        <Container className="container">
          <Logo>
            <img src={HeaderLogo} alt="Logotype" />
          </Logo>

          <nav>
            <NavList>
              <li>
                <LinkNav to="/" end>
                  Home
                </LinkNav>
              </li>
              <li>
                <LinkNav to="movies">Movies</LinkNav>
              </li>
            </NavList>
          </nav>
        </Container>
      </Head>

      <Outlet />
    </>
  );
};
