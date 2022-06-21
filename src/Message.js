export const Message = ({ downloadUrl, percentage }) => {
  if (downloadUrl)
    return (
      <a href={downloadUrl} target="_blank" download>
        Descargar...
      </a>
    );
  else if (percentage !== -1 && percentage) return percentage + "%";
  else return "Aqui va el link de descarga...";
};
