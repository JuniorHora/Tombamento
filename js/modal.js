(function($) {
    /* ADD */
    $('._modal_add_open').on('click', function(event) {
        let modal = document.getElementById('modal_add');
        modal.style.cssText = 'display: flex;'
        event.preventDefault();
    });

    $('._modal_add_close').on('click', function(event) {
        let modal = document.getElementById('modal_add');
        modal.style.cssText = 'display: none;'
        event.preventDefault();
    });

    /* EDIT */

    $('._modal_edit_open').on('click', function(event) {
        let modal = document.getElementById('modal_edit');
        modal.style.cssText = 'display: flex;'
    });

    $('._modal_edit_close').on('click', function(event) {
        let modal = document.getElementById('modal_edit');
        modal.style.cssText = 'display: none;'
    });

    /* DEL */

    $('._modal_delete_open').on('click', function(event) {
        let modal = document.getElementById('modal_delete');
        modal.style.cssText = 'display: flex;'
    });

    $('._modal_delete_close').on('click', function(event) {
        let modal = document.getElementById('modal_delete');
        modal.style.cssText = 'display: none;'
    });




    /* NEW [!!!!!!!!!!] */

    /* ADD */
    $('.floor_01').on('click', function(event) {
        console.log("irfsuid")
        let modal = document.getElementById('modal_add');
        modal.style.cssText = 'display: flex;'
        event.preventDefault();
    });

    $('.floor_02').on('click', function(event) {
        console.log("irfsui32d")
        let modal = document.getElementById('modal_add');
        modal.style.cssText = 'display: none;'
        event.preventDefault();
    });

})(jQuery);