export const Header = () => {
  const download = () => {
    fetch("/file.xlsx")
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `statistika_${new Date().toLocaleDateString()}.xlsx`;
        a.click();

        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="title-section">
          <span className="header-badge">Boshqaruv tizimi</span>
          <h1 className="main-title">Xorazm Viloyati Qo'riqlash Boshqarmasi</h1>
          <p className="subtitle">
            Mahallalar va hudud obyektlari monitoring platformasi
          </p>
        </div>
        <div className="header-controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              id="globalSearch"
              className="search-input"
              placeholder="Mahalla yoki obyekt qidirish..."
            />
          </div>
          <button
            id="exportBtn"
            className="btn btn-secondary"
            onClick={download}
          >
            <span className="icon-export"></span>
            Export CSV
          </button>
        </div>
      </div>
    </header>
  );
};
