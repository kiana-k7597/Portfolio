import { Header, Title, Subtext } from "./styling/Header.styles.tsx";
import { Body, BodyText } from "./styling/Body.styles.tsx";
import { MainPage } from "./styling/MainPage.styles.tsx";
function App() {
  return (
    <>
      <MainPage>
        <Header>
          <Title>Kiana Kabiri</Title>
          <Subtext>Software Engineer</Subtext>
        </Header>
        <Body>
          <BodyText>THG - 2020-present</BodyText>
          <BodyText>University of Manchester - BEng(Hons) - 2017-2020</BodyText>
        </Body>
      </MainPage>
    </>
  );
}

export default App;
