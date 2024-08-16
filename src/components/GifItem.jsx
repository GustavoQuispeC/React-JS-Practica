import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <>
      <div className="card">
        <p>{title}</p>
        <img src={url} alt={title} />
      </div>
    </>
  );
};

export default GifItem;

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
