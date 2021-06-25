import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        // de-structure project object to get needed properties
        ({ title, description, image, tags, link, github, id }) => (
          <BlogCard key={id} className='project-card'>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Technologies</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={github}>GitHub</ExternalLinks>
              <ExternalLinks href={link}>Launch 🚀</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
    <br />
    <br />
    <SectionDivider />
    <br />
    <br />
  </Section>
);

export default Projects;
