export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="https://sytranvn.dev/">
          sytranvn.dev
        </a>
      </div>
    </footer>
  )
}
