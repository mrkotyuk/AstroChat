import GenderCheckBox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
      backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Реєстрація
          <span className="text-purple-500"> AstroChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Повне ім'я</span>
            </label>
            <input
              type="text"
              placeholder="Введіть повне ім'я"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Нікнейм</span>
            </label>
            <input
              type="text"
              placeholder="Введіть нікнейм"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Пароль</span>
            </label>
            <input
              type="password"
              placeholder="Введіть пароль"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Повторіть пароль</span>
            </label>
            <input
              type="password"
              placeholder="Повторіть пароль"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Вже маєш аккаунт?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border-slate-700">
              Зареєструватися
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
