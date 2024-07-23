const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
      backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Вхід
          <span className="text-purple-500"> AstroChat</span>
        </h1>
        <form>
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
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Не маєш аккаунту?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Вхід</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
