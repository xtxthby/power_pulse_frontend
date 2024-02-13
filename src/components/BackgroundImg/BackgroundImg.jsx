import { TutorialBtn } from 'components/TutorialBtn/TutorialBtn';
import {
  BgContainer,
  Wrapper,
  BgImage,
  NotFoundContentBackground,
} from './BackgroundImg.styled';
import { DynamicStatistics } from 'components/DynamicStatistics/DynamicStatistics';

const getStatistics = step => {
  switch (step) {
    case 1:
      return 'users';
    case 2:
      return 'hours';
    case 3:
      return 'workouts';
    default:
      break;
  }
};

export const BackgroundImg = ({ children, notFound, backgroundStep }) => {
  const statistics = getStatistics(backgroundStep);

  return (
    <Wrapper notFound={notFound}>
      <BgContainer notFound={notFound}>
        {notFound && <NotFoundContentBackground notFound={notFound} />}
        <BgImage notFound={notFound} step={backgroundStep} />
        {!notFound && (
          <>
            <TutorialBtn />
            <DynamicStatistics statistics={statistics} />
          </>
        )}
      </BgContainer>
      {children}
    </Wrapper>
  );
};
