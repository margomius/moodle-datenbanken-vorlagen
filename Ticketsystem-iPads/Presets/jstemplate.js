/* Ticketsystem v.1.0.1 - Copyright (C) 2022, TRMSC - https://trmsc1.wordpress.com/ */
/* GNU General Public Licence 3.0 - http://www.gnu.de/documents/gpl-3.0.en.html */

/**
 * @event
 * @listens load
 * @description wait until jquery is loaded and go on with the checkSite function
 * @see https://github.com/TRMSC/moodle-editor-inline-codes/blob/main/jquery%20in%20moodle.html
 */
window.addEventListener( 'load', function( event ) {
    let jquery_load_check_interval = setInterval( function() {
        if ( window.jQuery ) {
            // open main function for checking the current page
            checkSite(); 
            clearInterval( jquery_load_check_interval );
        } else {
            console.log( 'jQuery in Moodle: new try to load jquery...' );
        }
    }, 150);
}, false );

/**
 * @function checkSite
 * @description main function for checking current page after jquery is loaded
 */
function checkSite() { 
    // check current page and go on with the appropriate function
    let site = document.getElementsByTagName('body')[0].id;
    switch (site) {
        case 'page-mod-data-edit':
            reviseEdit();
            break;
        case 'page-mod-data-view':
            reviseList();
            break;
    }
}

/**
 * @function reviseEdit
 * @description function for the edit page
 */
function reviseEdit() {
    // revise terms
    $('#region-main h2:first-of-type').text('Neues Ticket');    
    $('.btn[name="saveandadd"]').val('Speichern und weiteres Ticket hinzufügen');
    // select open status for new tickets
    let emptyState = $('option:first-of-type').attr('selected')
    if (emptyState !== undefined) {
        $('option:first-of-type').attr('selected', false);
        $('option[value="Offen"]').attr('selected', 'selected');
    }
    // check role and show feedback when write permissions detected
    let adminControl = $('.navbar .custom-control-input').length;
    if (adminControl > 0) {
        $('.adminonly').css('display', 'inherit');
    } else {
        adminControl = $('.nav-link[href*="field"]').length;
        if (adminControl > 0) {
            $('.adminonly').css('display', 'inherit');
        }
    }
}