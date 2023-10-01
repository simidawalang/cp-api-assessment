const Header = () => {
  const headerMenu = [
    "Program Details",
    "Application Form",
    "Workflow",
    "Preview",
  ];
  return (
    <>
      {" "}
      <div className="header-top" />
      <header className="header">
        {/* To prevent content from being seen on scroll */}

        <ul className="header-list">
          {headerMenu.map((m, i) => (
            <li
              className={`header-list__item ${
                m === "Application Form" ? "active" : "inactive"
              }`}
              key={i}
            >
              {m}
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
