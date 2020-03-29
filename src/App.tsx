import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { useSlider } from './useSlider';
import { MultipleChoicesQuestion } from './form/MultipleChoiceQuestion';

function App() {
  const { slideIndex, next, prev } = useSlider({ totalQuestionsCount: 2 });

  return (
    <form>
      <Carousel
        slideIndex={slideIndex}
        // Controles を消す
        renderCenterLeftControls={() => <></>}
        renderCenterRightControls={() => <></>}
        renderBottomCenterControls={() => <></>}
        // スワイプできんようにする
        swiping={false}
      >
        <MultipleChoicesQuestion
          questionText="お元気ですか？"
          answers={[
            { text: 'はい', value: true },
            { text: 'いいえ', value: false }
          ]}
          onAnswer={next}
          currentIndex={slideIndex}
          totalQuestionsCount={2}
        />
        <Hoge>
          <button onClick={prev}>戻る</button>
        </Hoge>
      </Carousel>{' '}
    </form>
  );
}

export default App;

const Hoge = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
