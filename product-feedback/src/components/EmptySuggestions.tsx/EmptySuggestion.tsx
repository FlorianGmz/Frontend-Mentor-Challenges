import NavButton from "../NavButton";
import IllustrationEmpty from "./IllustrationEmpty";

const NoFeedback = () => {
  return (
    <div className="flex h-[600px] w-[825px] flex-col items-center rounded-lg bg-bt-white_def px-[206px] py-[110px]">
      <IllustrationEmpty />
      <h1 className="mb-[16px] mt-[53px] text-h1 text-el-font_def">
        There is no feedback yet.
      </h1>
      <p className="mb-[48px] h-[46px] w-[410px] text-center text-body-1 text-feedback-description">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <NavButton
        to="/feedback/add"
        bgColor="bt-purple_def"
        bgHoverColor="bt-purple_hover"
      />
    </div>
  );
};

export default NoFeedback;
