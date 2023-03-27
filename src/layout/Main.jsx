export default function Main({ children }) {
  return (
    <main className="mx-auto grid w-full max-w-screen-2xl place-content-center px-4.5 pt-16 pb-6 md:px-12 lg:py-25 lg:px-24">
      {children}
    </main>
  );
}
