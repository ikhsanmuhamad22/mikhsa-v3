import avatar from '../assets/easlo-laptop.svg';

const Summery = () => {
  return (
    <section className="pt-10 h-screen">
      <h1 className="font-extrabold text-3xl">Portfolio</h1>
      <div className="flex">
        <div id="text-summery"></div>
        <div id="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Summery;
