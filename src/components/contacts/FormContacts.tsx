const FormContacts = () => {
  return (
    <form action="/" className="flex flex-col gap-3 lg:p-6 p-0">
      <input className="rounded-sm p-2 pl-3" placeholder="Name" type="text" />
      <input className="rounded-sm p-2 pl-3" placeholder="Email" type="email" />
      <textarea
        className="rounded-sm p-2 pl-3"
        name="message"
        id="message"
        cols={20}
        rows={7}
        placeholder="Your message"
      ></textarea>
      <button
        type="submit"
        className="flex w-fit gap-2 p-2 bg-light hover:bg-white text-dark rounded-sm"
      >
        <p>Send me a message</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </form>
  );
};

export default FormContacts;
