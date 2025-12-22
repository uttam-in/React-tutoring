import type { FormEvent } from "react";

export function meta() {
    return [
        { title: "Form Handling" },
        { name: "description", content: "Form handling example with React Router" },
    ];
}

export default function FormHandling() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values: Record<string, any> = {};
        
        formData.forEach((value, key) => {
            values[key] = value;
        });
        
        console.log("Form Values:", values);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <h2>All HTML Input Types</h2>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="text">Text:</label>
                    <input type="text" id="text" name="text" placeholder="Enter text" required />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required/>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="user@example.com" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="number">Number:</label>
                    <input type="number" id="number" name="number" min="0" max="100" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="tel">Telephone:</label>
                    <input type="tel" id="tel" name="tel" placeholder="123-456-7890" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="url">URL:</label>
                    <input type="url" id="url" name="url" placeholder="https://example.com" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="search">Search:</label>
                    <input type="search" id="search" name="search" placeholder="Search..." />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="datetime-local">DateTime Local:</label>
                    <input type="datetime-local" id="datetime-local" name="datetime-local" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="month">Month:</label>
                    <input type="month" id="month" name="month" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="week">Week:</label>
                    <input type="week" id="week" name="week" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="color">Color:</label>
                    <input type="color" id="color" name="color" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="range">Range:</label>
                    <input type="range" id="range" name="range" min="0" max="100" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="file">File:</label>
                    <input type="file" id="file" name="file" />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="hidden">Hidden (check dev tools):</label>
                    <input type="hidden" id="hidden" name="hidden" value="hidden-value" />
                    <span>Hidden input present</span>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <fieldset>
                        <legend>Radio buttons:</legend>
                        <label>
                            <input type="radio" name="radio-group" value="option1" />
                            Option 1
                        </label>
                        <label>
                            <input type="radio" name="radio-group" value="option2" />
                            Option 2
                        </label>
                    </fieldset>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <fieldset>
                        <legend>Checkboxes:</legend>
                        <label>
                            <input type="checkbox" name="checkbox1" value="check1" />
                            Checkbox 1
                        </label>
                        <label>
                            <input type="checkbox" name="checkbox2" value="check2" />
                            Checkbox 2
                        </label>
                    </fieldset>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="textarea">Textarea:</label>
                    <textarea id="textarea" name="textarea" rows={4} cols={50} placeholder="Enter multiple lines of text"></textarea>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="select">Select:</label>
                    <select id="select" name="select">
                        <option value="">Choose an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <button type="submit">Submit</button>
                    <button type="reset" style={{ marginLeft: '10px' }}>Reset</button>
                    <button type="button" style={{ marginLeft: '10px' }}>Button</button>
                </div>
            </form>

        </div>
    );
}
