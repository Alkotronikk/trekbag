export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <small>&copy; {year}</small>
      <p>
        Version <b>1.0.0</b>
      </p>
    </footer>
  );
}
