import avatar from '../assets/easlo-laptop.svg';

const Summery = () => {
  return (
    <section className="pt-10 h-full">
      <h1 className="font-bold text-4xl">Portfolio</h1>
      <div className="flex my-10">
        <div id="text-summery" className="flex-1">
          <h2 className="text-2xl font-bold mb-3">Hello i'm Ihsan Muhammad</h2>
          <p className="text-base font-medium ">
            Vocational school graduates who are interested in programming
            technology and software, have experience to create and develop
            several frontend and backend web projects such as CSM articles and
            online stores.
          </p>
          <br />
          <p className="text-base font-medium">
            as well as internship experience as a frontend developer, always
            eager and very active in learning new technologies.
          </p>
        </div>
        <div id="img-summery" className="flex flex-1 justify-center">
          <img className="h-80" src={avatar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Summery;
