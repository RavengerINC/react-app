function DownloadPDFButton() {
    return (
      <a href={`${process.env.PUBLIC_URL}/RESUME_JamesDalziel_General_2026.pdf`} download>
        <button>PDF Download</button>
      </a>
    );
  }
  
  export default DownloadPDFButton;
  