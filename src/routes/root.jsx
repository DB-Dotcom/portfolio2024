export default function Root() {
    // Dein iframe HTML als String
    const iframeHTML = `<div style="width:100%;height:0;padding-bottom:90%;position:relative;"><iframe src="https://giphy.com/embed/QZIcGPmYMclva" width="50%" height="50%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`;

    return (
        <div>
            {/* Einbetten des iframes mittels dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: iframeHTML }} />
        </div>
    );
}
