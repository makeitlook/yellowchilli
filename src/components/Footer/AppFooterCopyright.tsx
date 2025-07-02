function AppFooterCopyright() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="text-sm text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()} Yellow Chilli, All Rights Reserved.
      </div>
      <span className="text-sm">Created by Make It Look</span>
    </div>
  );
}

export default AppFooterCopyright;
