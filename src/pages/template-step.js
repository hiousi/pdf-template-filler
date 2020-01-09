import React from "react";
import ReactQuill from "react-quill";

import Container from "../components/container";
import Button from "../components/button";

import "react-quill/dist/quill.snow.css";

export default ({ template, setTemplate, onNextStep }) => {
    return (
        <Container>
            <h1>2. Defina o template para aplicar os dados do tsv.</h1>
            <h2>
                Para preenchimento ponha cada campo entre dois caracteres
                "%"(sem aspas).
            </h2>
            <ReactQuill
                value={template}
                modules={{
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ["bold", "italic", "underline"],

                        [{ list: "bullet" }],
                        ["link", "image"],

                        ["clean"]
                    ]
                }}
                onChange={setTemplate}
            />
            <Button onClick={onNextStep}>Continuar</Button>
        </Container>
    );
};
