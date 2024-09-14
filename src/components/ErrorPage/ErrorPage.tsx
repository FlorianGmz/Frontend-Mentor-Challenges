import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex w-full flex-col gap-[20px] text-el-font_def">
      <div className="xl-w-[825px] flex h-[72px] w-screen items-center justify-between bg-[url('assets/suggestions/mobile/background-header.png')] bg-cover px-[24px] py-[15px] md:mx-auto md:mt-[50px] md:h-[178px] md:w-[689px] md:items-end md:rounded-xl md:bg-[url('assets/suggestions/tablet/background-header.png')] xl:h-[137px] xl:w-[825px] xl:bg-[url('assets/suggestions/desktop/background-header.png')] xl:p-[24px]">
        <div className="flex flex-col">
          <p className="text-body-4 text-bt-white_def md:text-h2">
            Frontend Mentor
          </p>
          <p className="text-body-3 text-feedback-board md:text-body-2">
            Product Feedback
          </p>
        </div>
      </div>
      <div className="mx-[20px] flex flex-col gap-[30px] rounded-xl bg-bt-white_def p-[24px] px-[30px] md:mx-auto md:w-[689px] xl:w-[825px]">
        <h1 className="text-[80px] font-bold">Oops!</h1>
        <h4 className="text-[30px]">
          We can't seem to find the page you're looking for.
        </h4>
        <p className="font-bold text-feedback-description">Error 404</p>
        <p className="text-[20px] text-feedback-description">
          Here are some helpfull links:
        </p>
        <ul>
          <li>
            <NavLink
              to={"/suggestions"}
              className="text-feedback-description underline"
            >
              Suggestions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/roadmap"}
              className="text-feedback-description underline"
            >
              Roadmap
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
