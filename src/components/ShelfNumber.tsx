
const ShelfNumber = (props: any) => {
    return (
        <div className="input-wrapper">
            {Object.keys(props.params).map((attr: string) => {
                return (
                    <div key={attr} className="field">
                        <label>{attr}:</label>
                        <input type="number"
                            name={attr}
                            value = {props.params.attr}
                            placeholder={`Enter ${attr}...`}
                            onChange={props.handleChange} />
                    </div>
                )
            })
            }
        </div>
    );
}

export default ShelfNumber;