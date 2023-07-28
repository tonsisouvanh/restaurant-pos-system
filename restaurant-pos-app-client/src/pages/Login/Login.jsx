import undraw_progressive_app from "../../assets/svg/undraw_progressive_app.svg";
import Logo from "../../components/UI/Logo";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./LoginFormSchema";
import { motion } from "framer-motion";

import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";

import LanguageSelect from "../../components/Selects/LanguageSelect";
import { useTranslation } from "react-i18next";
import { getFont } from "../../utils/helper";
const Login = () => {
  const [t, i18n] = useTranslation("global");

  const { login, user } = useContext(UserContext);
  // cont [font,setFont] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler = (data) => {
    login(data);
  };

  return (
    <>
      <section
        className={`relative text-gray-600 body-font ${getFont(i18n.language)}`}
      >
        <div className="sticky w-full flex justify-end top-0 pt-3">
          <LanguageSelect />
        </div>

        <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
          <div className="space-y-10 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900 md:text-5xl">
              {t("Login.headline") || "Welcome to Future Solution Team!"}
            </h1>
            <p className="leading-relaxed text-lg mt-4 md:text-2xl">
              {t("Login.subline") ||
                "Login to access your account and start exploring our amazing features!"}
            </p>
            <img className="" src={undraw_progressive_app} alt="" />
          </div>

          <div className="lg:w-2/6 md:w-1/2 shadow-lg bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <Logo logoSize={"text-5xl"} textSize={"text-2xl"} />
            <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 md:text-3xl">
              {t("Login.txtLogin") || "Log In"}
            </h2>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 md:text-lg"
                >
                  {t("Login.labelEmail") || "Email"}
                </label>
                <input
                  {...register("email")}
                  placeholder="johndoe@hotmail.com"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/40 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out md:text-md"
                />
                {errors.email ? (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="text-red-600"
                  >
                    {errors.email.message}
                  </motion.p>
                ) : null}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600 md:text-lg"
                >
                  {t("Login.labelPassword") || "Email"}
                </label>
                <input
                  {...register("password")}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/40 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out md:text-lg"
                />
                {errors.password ? (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="text-red-600"
                  >
                    {errors.password.message}
                  </motion.p>
                ) : null}
              </div>
              <button
                type="submit"
                className="text-white transition bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary/80 rounded text-lg"
              >
                {t("Login.txtLogin") || "Log In"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
