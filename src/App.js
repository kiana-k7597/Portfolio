import { Header, Title } from "./styling/Header.styles.tsx";
import { Body, BodyText } from "./styling/Body.styles.tsx";
import { MainPage } from "./styling/MainPage.styles.tsx";
function App() {
  return (
    <>
      <MainPage>
        <Header>
          <Title>Kiana Kabiri</Title>
          <Title>Software Engineer</Title>
        </Header>
        <Body>
          <BodyText>THG - 2020-present</BodyText>
          <BodyText>University of Manchester - BEng(Hons)- 2017-2020</BodyText>
        </Body>
      </MainPage>
    </>
  );
}

export default App;
