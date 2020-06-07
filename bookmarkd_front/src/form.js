import React from 'react';

export default (props) => {
    const [formData, setFormData] = React.useState(props.initial);


    return (
        <>
            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Title"
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                placeholder="URL"
            />
        </>
    );
}