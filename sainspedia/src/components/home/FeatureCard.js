import React from "react";
import PropTypes from "prop-types";

function FeatureCard({ icon, title, desc, color }) {
  return (
    <div className={`card border-0 shadow h-100 bg-${color} text-white`}>
      <div className="card-body text-center">
        <i className={`${icon} display-3 mb-3`}></i>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "success",
    "warning",
    "danger",
    "info",
    "secondary",
    "dark",
  ]),
};

FeatureCard.defaultProps = {
  color: "primary",
};

export default FeatureCard;