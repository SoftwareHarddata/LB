import '../App.css';
import styled from 'styled-components/macro'
import SingUp from "../components/SingUp";
import LoginComponent from "../components/LoginComponent";

function Login({setToken, token}) {
  return (
    <PageLayout>
      <Header>
      </Header>
        <section>
            <LoginComponent token={token} setToken={setToken}/>
        </section>
        <Footer>
            <p>footer</p>
        </Footer>
    </PageLayout>
  );
}

export default Login;

const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #333;
  color: white;
  margin: 55px;
`

const Header = styled.header`
  padding: 0 16px;
  background: #222;
  color: wheat;
`

const Footer = styled.footer`
  padding: 0 16px;
  background: hotpink;
  color: #61dafb;
`
