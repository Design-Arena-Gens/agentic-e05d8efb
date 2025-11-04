import ChessMusicPlayer from "@/components/ChessMusicPlayer";

export default function Home() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Chess Music Generator</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Turn chess games (PGN) into generative music you can play in your browser.
      </p>
      <ChessMusicPlayer />
      <footer style={{ marginTop: 28, opacity: 0.6, fontSize: 13 }}>
        Built with Next.js & Web Audio. Works best in modern browsers with sound on.
      </footer>
    </div>
  );
}
