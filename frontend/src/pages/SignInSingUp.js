import '../App.css';
import LoginSignup from "../backup/LoginSignup";
import styled from 'styled-components/macro'
import SignUpPage from "../components/SignUpPage";

function SingInSingUp() {
  return (
    <PageLayout>
      <Header>
        <p>halli</p>
          <p>hallo</p>
      </Header>
        <section>
            <SignUpPage/>
        </section>
        <Footer>
            <p>footer</p>
        </Footer>
    </PageLayout>
  );
}

export default SingInSingUp;

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
