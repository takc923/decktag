var tags = [];

init();

function init(){
    var form = document.querySelector(".compose-content .js-compose-text");

    if (form === null) {
        setTimeout(init, 1000);
        return;
    }

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (form.disabled) {
                tags = form.value.match(/(?:^|\s)#\S+/g) || [];
            } else {
                form.value = tags.map(function(s){return s.trim();}).join(" ");
            }
        });
    });

    observer.observe(form, {attributes: true, attributeFilter: ["disabled"]});
}
