function AppFooterCopyright() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="text-sm text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()} Yellow Chilli, All Rights Reserved.
      </div>
      <a
        href="https://www.makeitlook.co.uk"
        target="_blank"
        className="text-sm text-text-secondary cursor-pointer"
      >
        Designed by Make It Look
      </a>
    </div>
  );
}

export default AppFooterCopyright;
