import '../App.css';
import styled from 'styled-components/macro'
import SingUp from "../components/SingUp";
import LoginComponent from "../components/LoginComponent";

function Login({setToken, token}) {
  return (
    <PageLayout>
        <Section>
            <LoginComponent token={token} setToken={setToken}/>
        </Section>
    </PageLayout>
  );
}

export default Login;

const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #365a80;
  color: white;
  //margin: 55px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`
