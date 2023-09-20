import React from "react";
import TechnologyCard from "./TechnologyInformation";
import NoDataFound from "../NoDataFound";
import CardHolder from "../../UI/CardHolder";
import PageHolder from "../../UI/PageHolder";
import Card from "../../UI/Card";
import TechnologyInformation from "./TechnologyInformation";

export default function TechnologyHolder(props) {
  return (
    <PageHolder
      pageParagraph="My portfolio reflects a harmonious blend of technology and creativity.
      Through innovative tools, I create captivating designs and interactive
      experiences that resonate with viewers. Continuously evolving, my
      portfolio stays at the forefront of digital trends."
      pageTitle="Technology"
    >
      <CardHolder>
        {props.technologyData.userTechnology.length === 0 ? (
          <NoDataFound message="No Technology Found" />
        ) : (
          props.technologyData.userTechnology.map((tech, index) => {
            return (
              <Card key={index} cardImage={tech.technologyImage}>
                <TechnologyInformation
                  techName={tech.technologyName}
                  techLevel={tech.proficiencyLevel}
                  techExperience={tech.yearsOfExperience}
                />
              </Card>
            );
          })
        )}
      </CardHolder>
    </PageHolder>
  );
}
