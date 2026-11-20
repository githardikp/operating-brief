import { Colophon } from "@/components/Colophon";
import { Correspondence } from "@/components/Correspondence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Practice } from "@/components/Practice";
import { Record } from "@/components/Record";
import { Work } from "@/components/Work";

export default function Page() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Hero />
        <Practice />
        <Record />
        <Work />
        <Correspondence />
      </main>
      <Colophon />
    </>
  );
}
