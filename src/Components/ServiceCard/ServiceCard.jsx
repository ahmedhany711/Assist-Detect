import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ServiceCard.scss";
// import ServiceDetailsPage from "../../Components/Pages/ServiceDetailsPage/ServiceDetailsPage";
// import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails";
import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  return (
    <div className="serviceCard col-3">
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <h5 className="col-12">{props.title}</h5>
      <p>{props.description}</p>

      <div id="readMore">
        <p>READ MORE</p>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    </div>
  );
}
