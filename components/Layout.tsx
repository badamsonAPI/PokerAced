export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ background: "#0a0a0a", color: "white", padding: "2rem", fontFamily: "Arial" }}>
      <header style={{ marginBottom: "2rem" }}><h1>PokerAced</h1></header>
      <main>{children}</main>
      <footer style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#777" }}>© 2025 PokerAced</footer>
    </div>
  );
}