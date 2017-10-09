import lang_data from "../data/languages.json";
$(function () {
    console.log("onload hit");
    $("[data-language]").on("click", function () {
        let $this = $(this);
        let data = $this.data();
        let lang = data.language;
        $("[data-language]").removeClass("active");
        $this.addClass("active");
        switchLanguage(lang);
        return true;
    });
})

function switchLanguage(lang) {
    var l_length = lang_data.sections.length;
    for (let a = 0; a < l_length; a++) {
        var section = lang_data.sections[a];
        let se_length = section.elements.length;
        if (section.id === "form1_handle_after") {
            let $parent = $("#form1");
            let se_length = section.elements.length;
            for (var i = 0; i < se_length; i++) {
                let element = section.elements[i];
                let $element;
                if (element._data_text == "c-submit-button") {
                    $element = $parent.find(`#${element._data_text}`);
                } else {
                    $element = $parent.find(`label[for=${element._data_text}]`);
                }
                $element.html(`<span>${element[lang]}</span>`);
            }
        } else {
            let $parent = $(`#${section.id}`);
            for (let i = 0; i < se_length; i++) {
                let element = section.elements[i];
                let $element = $parent.find(`[data-text=${element._data_text}]`);
                // text needs to be highlighted
                if (element.mark !== null) {
                    let string = element[lang];
                    let find = element.mark[lang];
                    let new_string = string.replace(find, `<mark>${find}</mark>`)
                    // I assume it is wrapped in quotes
                    $element.html(`<span>&ldquo;${new_string}&rdquo;</span>`);
                } else {
                    $element.html(`<span>${element[lang]}</span>`);
                }
            }
        }
    }
}