// components/Layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/">
            <div className="logo">岩尾研究会 /SHUMPEI IWAO Seminar Lab</div>
          </Link>
          <nav className="nav" aria-label="メインナビゲーション">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/vision">VISION</Link>
            <Link href="/reports">REPORTS</Link>
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="container">
          <div>© {new Date().getFullYear()} 慶應義塾大学 商学部 岩尾研究会</div>
          <div>お問い合わせ: https://pando.life/keioiwao/form/1</div>
        </div>
      </footer>
    </>
  );
};

export default Layout;


