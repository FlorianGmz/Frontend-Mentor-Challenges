import NavButton from "../NavButton";
import IllustrationEmpty from "./IllustrationEmpty";

const NoFeedback = () => {
  return (
    <div className="m-auto flex h-[460px] w-[327px] flex-col items-center justify-between rounded-lg bg-bt-white_def px-[24px] py-[76px]">
      <IllustrationEmpty />
      <h1 className="text-h2 text-el-font_def">There is no feedback yet.</h1>
      <p className="mb-[20px] h-[46px] text-center text-[13px] font-normal text-feedback-description">
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
