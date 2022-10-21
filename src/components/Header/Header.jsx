import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '../Container/Container.styled';
import { Head, Logo, NavList, NavItem, LinkNav } from './Header.styled';
import HeaderLogo from '../img/header__logo.svg';

const Header = () => {
  return (
    <>
      <Head>
        <Container className="container">
          <Logo>
            <img src={HeaderLogo} alt="Logotype" />
          </Logo>

          <nav>
            <NavList>
              <NavItem>
                <LinkNav to="/" end>
                  Home
                </LinkNav>
              </NavItem>
              <NavItem>
                <LinkNav to="movies">Movies</LinkNav>
              </NavItem>
            </NavList>
          </nav>
        </Container>
      </Head>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
