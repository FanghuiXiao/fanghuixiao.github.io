function jumpPage(id) {
	let pageUrl = "";
	switch(id) {
        case "researchBtn":
            pageUrl = "research.html";
            break;
        case "publicationsBtn":
            pageUrl = "publications.html";
            break;
        case "teachingBtn":
            pageUrl = "teaching.html";
            break;
        case "cvBtn":
            pageUrl = "cv.html";
            break;
        case "homeBtn":
        case "mName":
		default :
            pageUrl = "index.html";
			break;
	}
    window.open(pageUrl,'_self','fullscreen=1;titlebar=no;toolbar=no;location=no;');
}

function popupLink(id) {
    let pageUrl = "";
    switch(id) {
        case "project4Pdf":
            pageUrl = "https://drive.google.com/file/d/1Syj2jPMkbO9s_-nZOCgmvde9Xye_B9b4/view?usp=sharing";
            break;
        case "cvPdf":
            pageUrl = "https://drive.google.com/file/d/1PZt6cjgO_R9dIwr0dBDvu2oM6SRz2DLf/view?usp=sharing";
            break;
        case "diversityPdf":
            pageUrl = "https://drive.google.com/file/d/1z1QFW_MjV2OHsXnXC6H40zBua_OB_enS/view?usp=sharing";
            break;
        case "researchPdf":
            pageUrl = "https://drive.google.com/file/d/1-MXe-GASKftLP5Q5pqnjuiG2v_XBT_zU/view?usp=sharing";
            break;
        case "pub1":
            pageUrl = "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/asi.24831";
            break;
        case "pub2":
            pageUrl = "https://dl.acm.org/doi/abs/10.1145/3491101.3519689";
            break;
        case "pub3":
            pageUrl = "https://dl.acm.org/doi/abs/10.1145/3406522.3446007";
            break;
        case "pub4":
            pageUrl = "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.483";
            break;
        case "pub5":
            pageUrl = "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.278";
            break;
        case "pub6":
            pageUrl = "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.308";
            break;
        case "pub7":
            pageUrl = "http://www.ijdc.net/article/view/597";
            break;
        case "pub8":
            pageUrl = "https://dl.acm.org/doi/abs/10.1145/3421937.3421982";
            break;
        case "pub9":
            pageUrl = "https://dl.acm.org/doi/abs/10.1145/3383583.3398554";
            break;
        case "pub10":
            pageUrl = "https://dl.acm.org/doi/10.1145/3295750.3298958";
            break;
        case "pub11":
            pageUrl = "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.2018.14505501062?af=R";
            break;
        case "pub12":
            pageUrl = "http://www.ijdc.net/article/view/609";
            break;
        default :
            break;
    }
    if(!!pageUrl) {
        window.open(pageUrl);
    }
}
