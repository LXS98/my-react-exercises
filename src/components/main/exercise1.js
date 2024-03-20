import React, { useState } from 'react';

const Exercise1 = () => {
    const [formData, setFormData] = useState({
        names: Array(10).fill({ firstName: '', lastName: '' }),
        shuffledFirstNames: [],
        shuffledLastNames: [],
        sortedNames: []
      });
    
    // This will get all inputted first names and last names
    const getNamesOnChange = (index, e) => {
        const { name, value } = e.target;
        const updatedNames = [...formData.names];
        updatedNames[index] = { ...updatedNames[index], [name]: value };
        setFormData({ ...formData, names: updatedNames });
    };

    // useEffect(() => {
    //     console.log("Updated FormData:", formData);
    //   }, [formData]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Shuffle first names
        const shuffledFirstNames = formData.names
            .map((name) => name.firstName)
            .sort(() => Math.random() - 0.5);


        // Shuffle last names
        const shuffledLastNames = formData.names
            .map((name) => name.lastName)
            .sort(() => Math.random() - 0.5);

        // Compare first name and last name
         // Combine shuffled first names and last names into sorted names
        const sortedNames = shuffledFirstNames.reduce((result, firstName, index) => {
            const lastName = shuffledLastNames[index];
            // Check if first name is alphabetically before or equal to last name
            if (firstName <= lastName) {
            result.push({ firstName, lastName });
            }
            console.log("Result", result)

            return result;
        }, []);

        setFormData({ ...formData, shuffledFirstNames, shuffledLastNames, sortedNames });
    };

    // Function to calculate the total ASCII value of a string
    const calculateTotalASCIIValue = (lastName) => {
        let total = 0;
        for (let i = 0; i < lastName.length; i++) {
        total += lastName.charCodeAt(i);
        }
        return total;
    };
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-5">
                    <div>
                        <h3 className="mb-4">Name Forms </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {formData.names.map((name, index) => (
                            <div className="input-group mt-2" key={index}>
                                <input 
                                    placeholder="First Name"
                                    type="text" 
                                    className="form-control" 
                                    name="firstName"
                                    value={name.firstName}
                                    onChange={(e) => getNamesOnChange(index, e)}
                                />
                                <input 
                                    placeholder="Last Name"
                                    type="text" 
                                    className="form-control" 
                                    name="lastName"
                                    value={name.lastName}
                                    onChange={(e) => getNamesOnChange(index, e)}
                                />  
                            </div>
                         ))}
                        <div className="d-grid mt-2">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                    
                </div>
                <div className="col-sm-7">
                {formData.shuffledFirstNames.length > 0 && (
                    <div class="card">
                       <h5 class="card-header">Results</h5>
                        <div class="card-body">
                            {formData.shuffledFirstNames.length > 0 && (
                                <div className="shuffledNames">
                                    <h5 class="card-title">Shuffled Names</h5>
                                    <ol className="list-group-numbered">
                                        {formData.shuffledFirstNames.map((firstName, index) => (
                                            <li className="list-group-item" key={index}>{firstName} {formData.shuffledLastNames[index]}</li>
                                        ))}
                                    </ol>
                                </div>
                            )}
                            {formData.sortedNames.length > 0 && (
                                <div className="sortedNames">
                                    <h5 class="card-title">Sorted Names</h5>
                                    <ol className="list-group-numbered">
                                        {formData.sortedNames.map((name, index) => (
                                            <li className="list-group-item" key={index}>{name.firstName} {name.lastName} </li>
                                        ))}
                                    </ol>
                                </div>
                            )}
                            {formData.shuffledLastNames.length > 0 && (
                                <div className="calculatedLastNames">
                                    <h5 class="card-title">Last Names and ASCII Values</h5>
                                    <ol className="list-group-numbered">
                                    {formData.shuffledLastNames.map((lastName, index) => (
                                        <li className="list-group-item" key={index}>
                                        {lastName} - {calculateTotalASCIIValue(lastName)}
                                        </li>
                                    ))}
                                    </ol>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default Exercise1;