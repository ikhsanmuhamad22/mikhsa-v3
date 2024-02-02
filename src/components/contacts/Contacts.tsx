import FormContacts from './FormContacts';

const Contacts = () => {
  return (
    <section id="contacts" className="pt-10 h-full mb-10">
      <h1 className="text-2xl font-bold mb-3">Let's Work Together</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-2 gap-5">
        <div>
          <p>
            If you're interested to maximize your and your team's efficiency,
            send us a message to get started.
          </p>
        </div>
        <div>
          <FormContacts />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
