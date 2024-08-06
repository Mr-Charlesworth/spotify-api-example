import { css } from "@emotion/css"
import { FC } from "react"

const ArtModal: FC<{
  url: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ url, setShowModal }) => {

  const modal = css({
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: 'flex',
  });

  const modalContent = css({
    justifyContent: "center",
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "640px",
  })

  return (
    <div className={modal} onClick={() => setShowModal(() => false)}>
      <img className={modalContent} src={url} alt={"Album Cover"} />
    </div>
  );
};

export default ArtModal;