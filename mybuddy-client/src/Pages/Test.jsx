import { useCallback } from "react";
import PropTypes from "prop-types";

const Test = ({ className = "" }) => {
  const onIAlreadyHaveClick = useCallback(() => {
    // Please sync "Sign In Page" to the project
  }, []);

  return (
    <div
      className={`w-[1437px] max-w-full flex flex-row items-start justify-center pt-[170.1px] px-5 pb-[170.2px] box-border bg-[url('/public/login-sections@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] text-left text-[26px] text-dark font-archivo mq650:gap-[28px] ${className}`}
    >
      <div className="w-[589px] rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-white flex flex-col items-start justify-start py-10 px-12 box-border gap-[37.7px] max-w-full mq650:gap-[19px] mq650:pl-6 mq650:pr-6 mq650:box-border mq700:pt-[26px] mq700:pb-[26px] mq700:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-inherit mq450:text-[21px]">
              Create Account
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.7px] box-border max-w-full">
              <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[26.7px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.7px] max-w-full">
                  <div className="self-stretch rounded bg-primary-contrast box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[18px] gap-[9.4px] max-w-full border-[1px] border-solid border-gainsboro">
                    <input
                      className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-archivo text-base bg-[transparent] h-[17px] flex-1 relative tracking-[0.24px] text-light-text text-left flex items-center min-w-[150px] max-w-[calc(100%_-_29px)] p-0"
                      placeholder="Email address"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/iconaccount.svg"
                    />
                  </div>
                  <div className="self-stretch rounded bg-primary-contrast box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[18px] gap-[9.4px] max-w-full border-[1px] border-solid border-gainsboro">
                    <input
                      className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-archivo text-base bg-[transparent] h-[17px] flex-1 relative tracking-[0.24px] text-light-text text-left flex items-center min-w-[150px] max-w-[calc(100%_-_29px)] p-0"
                      placeholder="Password"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/iconpassword.svg"
                    />
                  </div>
                  <div className="self-stretch rounded bg-primary-contrast box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[18px] gap-[9.4px] max-w-full border-[1px] border-solid border-gainsboro">
                    <input
                      className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-archivo text-base bg-[transparent] h-[17px] flex-1 relative tracking-[0.24px] text-light-text text-left flex items-center min-w-[150px] max-w-[calc(100%_-_29px)] p-0"
                      placeholder="Confirm password"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/iconpassword.svg"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[13px] px-[50px] bg-accent rounded-md overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightseagreen">
                  <div className="relative text-base tracking-[0.46px] leading-[26px] font-semibold font-archivo text-primary-contrast text-center inline-block min-w-[59px]">
                    Sign up
                  </div>
                </button>
              </form>
            </div>
            <div className="self-stretch h-[13.7px] flex flex-row items-start justify-start pt-0 px-0 pb-[12.1px] box-border max-w-full">
              <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1.6px] border-solid border-whitesmoke-200" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base">
              <div className="self-stretch relative tracking-[0.02em] leading-[26px]">
                Or sign up with
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 gap-[14px_12px] text-center text-light-text">
                <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[13px] box-border gap-[18px] min-w-[125px]">
                  <img
                    className="w-10 h-[40.5px] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/google-icon@2x.png"
                  />
                  <div className="self-stretch relative tracking-[0.24px]">
                    Google
                  </div>
                </div>
                <div className="flex-[0.5659] rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[41px] box-border gap-[18px] min-w-[125px]">
                  <img
                    className="w-10 h-[40.5px] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/facebook-icon@2x.png"
                  />
                  <div className="relative tracking-[0.24px] inline-block min-w-[73px]">
                    Facebook
                  </div>
                </div>
                <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[13px] box-border gap-[18px] min-w-[125px]">
                  <img
                    className="w-10 h-[40.5px] relative object-contain"
                    loading="lazy"
                    alt=""
                    src="/apple-icon@2x.png"
                  />
                  <div className="self-stretch relative tracking-[0.24px]">
                    Apple
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="self-stretch relative text-base tracking-[0.02em] leading-[26px] text-center cursor-pointer"
            onClick={onIAlreadyHaveClick}
          >
            <span>{`I already have an account. `}</span>
            <span className="text-accent">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Test.propTypes = {
  className: PropTypes.string,
};

export default Test;
