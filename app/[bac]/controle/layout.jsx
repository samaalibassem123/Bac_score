"use client";
import Header from "@/components/Header";
export default function RootLayout({ children, params }) {
  const Title = `Score de Bac ${params.bac} - Session Controle  `;
  return (
    <main className="2xl:h-full  h-fit flex flex-col  select-none font-ft">
      <Header title={Title} />
      {children}
    </main>
  );
}
