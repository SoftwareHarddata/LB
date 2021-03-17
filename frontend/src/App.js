import './App.css';
import LoginSignup from "./pages/LoginSignup";
import styled from 'styled-components/macro'

function App() {
  return (
    <PageLoyout className="App">
      <Header>
        <p>halli</p>
          <p>hallo</p>
      </Header>
        <section>
            <LoginSignup/>
        </section>
        <Footer>
            <p>footer</p>
        </Footer>
    </PageLoyout>
  );
}

export default App;

const PageLoyout = styled.div`
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
