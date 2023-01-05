export default function PostcodeForm({ setPostcode }) {
  let postcodeStr = "";

  
  const handleChange = (e) => {
    postcodeStr = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostcode(postcodeStr);
    postcodeStr = "";
  };

  return (
    <form className="postcode-form">
      <fieldset>
        <p>
          Please enter an outcode to search
          <br />
          eg - "M1” rather than “M1 7ED”
        </p>
        <label htmlFor="postcode">Postcode: </label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          placeholder="Enter a postcode..."
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </fieldset>
    </form>
  );
}
