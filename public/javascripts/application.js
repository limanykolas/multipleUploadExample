function remove_fields(link) {
    $(link).prev("input[type^=hidden]")[0].value = "1";
    $(link).parent(".field").hide();
}

function add_fields(link, association, content) {
    var new_id = new Date().getTime();
    var regexp = new RegExp("new_" + association, "g");
    $(link).before(content.replace(regexp, new_id));
}

