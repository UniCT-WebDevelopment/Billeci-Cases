$(document).ready(function() {
    // @ts-ignore
    $('#show-templates').text(JSON.stringify(templates));

    let card = $('#card-templates');
    let html : string = "";
    // @ts-ignore
    Object.keys(templates).forEach(function(key) {
        // @ts-ignore
        html += addTemplate(templates[key]);
    });

    card.html(html);

});

function addTemplate(row) : string {
    let shaped = row['shaped']==='0'? "No Shaped":"Shaped";

    return '<div class="cardx-dark card-3col">\n' +
        '            <div class="card-body" style="display: flex;">\n' +
        '                <div class="card-dashboard-image"><img src="img/materials/' + row['name'].toLowerCase() + '.png"></div>\n' +
        '                <div class="card-dashboard-text card-templates-text">\n' +
        '                    <div>\n' +
        '                        <p>' + row['name'] + '</p>\n' +
        '                        <p>' + row['color'] + '</p>\n' +
        '                        <p>' + row['measures'] + '</p>\n' +
        '                        <p>' + shaped + '</p>\n' +
        '                        <p>' + row['handles'] + ' Handles</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
}
