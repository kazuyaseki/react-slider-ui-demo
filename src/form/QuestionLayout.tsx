import * as React from 'react';
import styled from 'styled-components';

export type QuestionProps = {
  currentIndex: number;
  totalQuestionsCount: number;
  questionText: string;
};

export const QuestionLayout: React.FC<QuestionProps> = props => {
  return (
    <Layout>
      <Heading>
        {props.currentIndex} / {props.totalQuestionsCount}
      </Heading>

      <ContentLayout>
        {props.questionText}
        {props.children}
      </ContentLayout>
    </Layout>
  );
};

const Layout = styled.div``;

const Heading = styled.header``;

const ContentLayout = styled.div``;
