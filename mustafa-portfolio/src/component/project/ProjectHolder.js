import React from "react";
import ProjectName from "./ProjectName";
import NoDataFound from "../NoDataFound";
import CardHolder from "../../UI/CardHolder";
import PageHolder from "../../UI/PageHolder";
import Card from "../../UI/Card";

export default function ProjectHolder(props) {
  return (
    <PageHolder
      pageParagraph="Here, you'll find a curated selection of my work, 
      each project representing a unique journey and 
      a testament to my skills and expertise.
       As you explore these projects, you'll gain insight into my creative process,
        problem-solving abilities, and dedication to deliver outstanding results."
      pageTitle="Projects"
    >
      <CardHolder>
        {props.data.projects.length === 0 ? (
          <NoDataFound message="No Project Found." />
        ) : (
          props.data.projects.map((project, index) => {
            return (
              <Card cardImage={project.images[0]} key={index}>
                <ProjectName cardData={project} />
              </Card>
            );
          })
        )}
      </CardHolder>
    </PageHolder>
  );
}
