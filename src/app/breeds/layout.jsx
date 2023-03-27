import Header from "@/layout/Header";
import Main from "@/layout/Main";

export const metadata = {
  title: "Cat Wiki | Top searched breeds",
};

export default function CatsLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
