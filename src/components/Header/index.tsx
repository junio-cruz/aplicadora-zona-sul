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
          <h1>Aplicadora Zona Sul</h1>
        </LogoContainer>
        <NavigationContainer>
          <NavigationItem>Início</NavigationItem>
          <NavigationItem>Serviços</NavigationItem>
          <NavigationItem>Quem Somos</NavigationItem>
          <NavigationItem>Contato</NavigationItem>
        </NavigationContainer>
      </Content>
    </Container>
  );
}
