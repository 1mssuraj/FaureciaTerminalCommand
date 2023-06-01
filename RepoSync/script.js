const element = document.querySelector('.alert');
// element.style.display = 'block';


function copy(text) {
    navigator.clipboard.writeText(text).then(function () {
        element.innerHTML = text;
        element.style.display = 'flex';
        setTimeout(function () { element.style.display = 'none'; }, 1000);
    });

}

function prompts() {
    document.querySelector(".prompt").style.display = "flex";
}

const form = document.querySelector("form");

form.addEventListener(

    "submit",
    (event) => {
        const data = new FormData(form);
        let output = "";
        for (const entry of data) {
            output = `${output}${entry[0]}=${entry[1]}\r`;
        }
        event.preventDefault();

        if (output.includes("BUGFIX")) {
            copy(`git commit -m "[BUGFIX SPIC-X] [Commit Messasge]"`)
        }
        else if (output.includes("DEV")) {
            copy(`git commit -m "[DEV SPIC-X] [Commit Messasge]"`)
        }
        document.querySelector(".prompt").style.display = "none";
    },

    false
);