const FindJob = () => {
  return (
    <div className="flex flex-col bg-sky-500 p-10">
      <h1 className="font-bold text-xl">Find your dream job</h1>
      <br />
      <div>
        <h3>Write your occupation</h3>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>
      <br />
      <div>
        <h3>Skilled category</h3>
        <div className="form-control w-full max-w-xs">
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
      </div>
      <br />
      <div>
        <h3>Country</h3>
        <div className="form-control w-full max-w-xs">
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
      </div>
      <br />
      <button className="btn btn-accent">Button</button>
    </div>
  );
};

export default FindJob;
