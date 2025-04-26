body {
    font-family: sans-serif;
    margin: 0;
    background-color: #1e293b;
    /* A dark grayish-blue background */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #f8f8f2;
    /* Light text color */
}

.container {
    background-color: #334155;
    /* Darker container background */
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    width: 80%;
    max-width: 600px;
    text-align: center;
    /* Center the content within the container */
}

h1 {
    color: #f8f8f2;
    margin-bottom: 30px;
}

.input-group {
    margin-bottom: 25px;
    text-align: left;
    /* Align labels to the left */
}

label {
    display: block;
    margin-bottom: 8px;
    color: #cbd5e1;
    /* Light gray label color */
    font-weight: bold;
}

input[type="text"],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #475569;
    /* Darker border for inputs */
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #4a5568;
    /* Dark input background */
    color: #f8f8f2;
    font-family: sans-serif; /* Explicitly set the font-family */
}

textarea {
    min-height: 100px;
}

button {
    color: white;
    padding: 14px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    transition: opacity 0.3s ease;
}

button:hover {
    opacity: 0.8;
}

#generateBtn {
    background: linear-gradient(to right, #8b5cf6, #f093fb);
    /* Purple to pink gradient */
}

#generateRandomBtn {
    background: linear-gradient(to right, #10b981, #38bdf8);
    /* Green to blue gradient */
}

.output-group {
    margin-top: 30px;
    padding: 20px;
    border-radius: 10px;
    background-color: #334155;
    /* Dark output background */
    text-align: center;
}

.output-group h2 {
    color: #f8f8f2;
    margin-top: 0;
    margin-bottom: 15px;
}

#promptOutput {
    font-size: 18px;
    color: #cbd5e1;
    /* Light gray output text */
    word-break: break-word;
}

#copyPromptBtn {
    background: linear-gradient(to right, #10b981, #fbc02d); /* A nice amber/orange gradient */
    color: white;
    padding: 10px 24px; /* Reduced vertical padding */
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: inline-block; /* Allows it to take up only necessary width */
    margin-top: 15px;
    transition: opacity 0.3s ease;
    width: auto; /* Adjust width to content */
 
}

#copyPromptBtn:hover {
    opacity: 0.8;
}

#bingButton {
    background: linear-gradient(to right, #3858f8, #00a2e8);
    /* A blue gradient */
    color: white;
    padding: 14px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: block;
    width: 100%;
    margin-top: 1px;
    /* Add some space above the button */
    transition: opacity 0.3s ease;
}

#bingButton:hover {
    opacity: 0.8;
}
#chatgptButton {
    background: linear-gradient(to right, #3858f8, #00a2e8);
    /* A blue gradient */
    color: white;
    padding: 14px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: block;
    width: 100%;
    margin-top: 1px;
    /* Add some space above the button */
    transition: opacity 0.3s ease;
}

#chatgptButton:hover {
    opacity: 0.8;
}

#geminiButton {
    background: linear-gradient(to right, #3858f8, #00a2e8);
    /* A blue gradient */
    color: white;
    padding: 14px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: block;
    width: 100%;
    margin-top: 1px;
    /* Add some space above the button */
    transition: opacity 0.3s ease;
}

#geminiButton:hover {
    opacity: 0.8;
