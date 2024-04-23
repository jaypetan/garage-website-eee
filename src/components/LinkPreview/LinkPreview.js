import Typography from "../typography/Typography";
import "./LinkPreview.css";

function LinkPreview(props) {
  let link = props.link;
  let endProtocol = link.indexOf("//");
  if (endProtocol !== -1) {
    link = link.substring(endProtocol + 2);
  }
  let slashIndex = link.indexOf("/");
  if (slashIndex !== -1) {
    link = link.substring(0, slashIndex);
  }

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="link-preview"
    >
      <img
        className="favicon"
        src={"https://icons.duckduckgo.com/ip3/" + link + ".ico"}
        alt="url's favicon"
      />
      <div className="link-label">
        <Typography variant="smallHeading">Visit Us</Typography>
        <Typography>{props.link}</Typography>
      </div>
    </a>
  );
}

export default LinkPreview;
