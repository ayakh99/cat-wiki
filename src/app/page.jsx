import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Article from "./components/Article";
import Featured from "./components/Featured";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header>
        <Hero />
        <Featured />
      </Header>
      <Main>
        <Article />
      </Main>
    </>
  );
}
