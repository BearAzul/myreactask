import Navbar from '../components/NavbarPage.jsx'

function NotFound() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen pt-20 pb-10 bg-slate-800">
        <div className="container max-w-xs mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="flex items-center justify-start gap-1 text-sm text-white pages">
            <button disabled>Home</button> /
            <button className="hover:underline">NextTask</button>
          </div>
          <div className="grid place-content-center text-teal-400 min-h-max mt-6 h-[400px]">
            <p>404 | Not Found</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound