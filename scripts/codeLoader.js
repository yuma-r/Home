async function loadScript() {
    const container = document.getElementById("fullCode");
    const content = document.getElementById("codeContent");
    const btn = document.getElementById("ScriptButton");

//<button onclick="loadScript()">Show Script Example</button>
    
    // toggle if already loaded
    if (container.style.display === "block") {
        container.style.display = "none";
        btn.textContent = "Show Script Example";
        return;
    }

    // only load once
    if (!content.textContent) {
        const response = await fetch("../scripts/Player.txt");
        const text = await response.text();
        content.textContent = text;

    //onclick="loadScript()"
        content.appendChild(btn.cloneNode(true));
    }

    container.style.display = "block";
    btn.textContent = "Hide Script Example";
}
