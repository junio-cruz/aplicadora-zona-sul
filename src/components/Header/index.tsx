import {
  Container,
  Content,
  LogoContainer,
  NavigationContainer,
  NavigationItem
} from './styles';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src="" alt="AZS Logo" />
          <h1>Aplicadora Zona Sul</h1>
        </LogoContainer>
        <NavigationContainer>
          <NavigationItem>Início</NavigationItem>
          <NavigationItem>Quem Somos</NavigationItem>
          <NavigationItem>Mostruário</NavigationItem>
          <NavigationItem>Contato</NavigationItem>
        </NavigationContainer>
      </Content>
    </Container>
  );
}
