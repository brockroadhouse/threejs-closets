const ClosetForm = (props: any) => {
  return (
    <div className="input-wrapper">          
      {Object.keys(props.params).map((attr: string) => {
        return (
          <div key={attr} className="field">
            <label>{attr}:</label>
                {attr === 'type' ?
                    <select name="type" value={props.params[attr]} onChange={props.handleChange}>
                    <option value="">Select type...</option>
                    {props.types.map((type: string, i: number) => (
                        <option key={i} value={type}>
                        {type}
                        </option>
                    ))}
                    </select>
                    :
                    <input
              type="text"
              name={attr}
              value={props.params[attr]}
              placeholder={`Enter ${attr}...`}
              onChange={props.handleChange}
            />
        }
            
          </div>
        );
      })}
    </div>
  );
};

export default ClosetForm;
