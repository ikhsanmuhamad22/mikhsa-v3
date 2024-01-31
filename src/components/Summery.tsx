import avatar from '../assets/easlo-laptop.svg';
import myCV from '../assets/IHSAN.pdf';

const Summery = () => {
  return (
    <section id="summery" className="pt-10 h-full">
      <h1 className="font-bold text-4xl">Portfolio</h1>
      <div className="flex lg:flex-row flex-col-reverse my-10">
        <div id="text-summery" className="flex-1 w-full">
          <h2 className="text-2xl font-bold mb-3">Hello i'm Ihsan Muhammad</h2>
          <p className="text-base font-medium">
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
          <br />
          <button className="p-2 bg-silver hover:bg-light text-dark rounded-md">
            <a href={myCV} download>
              Get Resume
            </a>
          </button>
        </div>
        <div
          id="img-summery"
          className="flex flex-1 lg:justify-end justify-center mb-3"
        >
          <img className="h-80" src={avatar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Summery;
