import { ThemeProvider } from 'styled-components';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import { theme } from "./components/styles/Theme";
import { GlobalStyles } from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    
    
      <Header />
      <Container >
        {content.map((item, index)=> ( <Card key={index} item={item}/>))}
      </Container>
      <Footer />
    

    </>
    </ThemeProvider>
  );
}

export default App;
