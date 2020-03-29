import * as React from 'react';
import { QuestionLayout, QuestionProps } from './QuestionLayout';
import styled from 'styled-components';

type Props<AnswerType> = {
  answers: { text: string; value: AnswerType }[];
  onAnswer: (value: AnswerType) => void;
} & QuestionProps;

export function MultipleChoicesQuestion<AnswerType>(props: Props<AnswerType>) {
  return (
    <QuestionLayout {...props}>
      <Answers>
        {props.answers.map((answer, index) => (
          <Answer onClick={() => props.onAnswer(answer.value)} key={index}>
            {answer.text}
          </Answer>
        ))}
      </Answers>
    </QuestionLayout>
  );
}

const Answers = styled.ul``;

const Answer = styled.li``;
