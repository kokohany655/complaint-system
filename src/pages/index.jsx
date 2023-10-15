import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "./_app";
import Login from "@/components/Login";

const Home = () => {
  const router = useRouter();
  const data = useContext(ContextData);
  const [isLogin, setIsLogin] = useState(true);

  const handleAddReport = (e) => {
    e.preventDefault();
    router.push("/print-report");
  };

  return (
    <>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleAddReport}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={({ target }) => data.setName(target.value)}
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={({ target }) => data.setEmail(target.value)}
                  placeholder=""
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Bug description
                </label>

                <textarea
                  id="messge"
                  cols="30"
                  rows="10"
                  value={data.message}
                  onChange={({ target }) => data.setMessage(target.value)}
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full text-white bg-[#702DF7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Send roport
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
