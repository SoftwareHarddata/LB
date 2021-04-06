import '../App.css';
import styled from 'styled-components/macro'
import SingUp from "../components/SingUp";

function SingUpPage() {
  return (
    <PageLayout>
      <Header>
        <p>2 be better</p>
      </Header>
        <section>
            <SingUp/>
        </section>
        <Footer>
            <p>footer</p>
        </Footer>
    </PageLayout>
  );
}

export default SingUpPage;

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
